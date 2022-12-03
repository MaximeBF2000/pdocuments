import React, { useRef, useState } from 'react'
import type { DocumentEditorProps, BlockProps, Block } from './editor'
import { uid } from '@/utils/string'
import {
  arrInsertAtIndex,
  arrRemoveAtIndex,
  arrUpdateAtIndex
} from '@/utils/array'
import { useToggle } from '@/hooks'
import { componentByElements } from './componentsByElements'
import { setCaretToEnd } from './editor.utils'

export const DocumentEditor: React.FC<DocumentEditorProps> = () => {
  const [blocks, setBlocks] = useState<Block[]>([
    {
      id: uid(),
      content: 'Your new page !',
      element: 'p'
    }
  ])
  const blockListRef = useRef<HTMLUListElement>(null)

  const handleKeyDown = (event: React.KeyboardEvent, block: Block) => {
    if (event.key === 'Enter') return handleAddBlock(event, block)
    if (
      event.key === 'Backspace' &&
      (block.content === '' || block.content === null)
    ) {
      return handleDeleteBlock(event, block)
    }
    if (event.key === 'ArrowUp') return handleCaretUp(event, block)
  }

  const handleCaretUp = (event: React.KeyboardEvent, block: Block) => {
    console.log({ event })
  }

  const handleAddBlock = (event: React.KeyboardEvent, block: Block) => {
    event.preventDefault()

    const newBlockId = uid()
    setBlocks(prev =>
      arrInsertAtIndex(prev, blocks.findIndex(b => b.id === block.id) + 1, {
        id: newBlockId,
        content: '',
        element: 'p'
      })
    )

    setTimeout(() => {
      const eventTarget = event.target as Element
      const newBlockTarget = eventTarget.nextElementSibling as HTMLElement
      newBlockTarget.focus()
      setCaretToEnd(newBlockTarget)
    }, 0)
  }

  const handleDeleteBlock = (event: React.KeyboardEvent, block: Block) => {
    console.log('inIfDelete')
    setBlocks(prev =>
      arrRemoveAtIndex(
        prev,
        blocks.findIndex(b => b.id === block.id)
      )
    )
  }

  const updateBlockValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    block: Block
  ) => {
    const findBlockById = currentBlock => currentBlock.id === block.id

    setBlocks(prev =>
      arrUpdateAtIndex(prev, prev.findIndex(findBlockById), {
        ...prev.find(findBlockById),
        content: event.target.textContent
      })
    )

    const blockNode = blockListRef.current?.querySelector<HTMLDivElement>(
      `[data-blockid="${block.id}"]`
    )
    blockNode.focus()
    setCaretToEnd(blockNode)
  }

  return (
    <div className="bg-white w-full p-4">
      <ul
        ref={blockListRef}
        className="outline-none"
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        {blocks?.map(block => {
          const BlockField: React.FC<BlockProps> =
            componentByElements[block.element]

          return (
            <BlockField
              key={block.id}
              data-blockid={block.id}
              className="outline-none"
              content={block.content}
              onKeyDown={event => handleKeyDown(event, block)}
              onInput={event =>
                updateBlockValue(
                  event as React.ChangeEvent<HTMLInputElement>,
                  block
                )
              }
            />
          )
        })}
      </ul>
    </div>
  )
}
