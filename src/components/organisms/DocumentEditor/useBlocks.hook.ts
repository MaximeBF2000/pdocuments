import React, { useState } from 'react'
import type { Block, KeyboardBlockEventHandler } from './editor.d'
import { getNodeByDataBlockId, setCaretToEnd } from './editor.utils'
import { uid } from '@/utils/string'
import {
  arrInsertAtIndex,
  arrRemoveAtIndex,
  arrUpdateAtIndex
} from '@/utils/array'

interface UseBlocks {
  blockListRef: React.MutableRefObject<HTMLUListElement>
}

export const useBlocks = ({ blockListRef }: UseBlocks) => {
  const [blocks, setBlocks] = useState<Block[]>([
    {
      id: uid(),
      content: 'Your new page !',
      element: 'text'
    }
  ])

  const handleAddBlock: KeyboardBlockEventHandler = async (event, block) => {
    event.preventDefault()

    await setBlocks(prev =>
      arrInsertAtIndex(prev, blocks.findIndex(b => b.id === block.id) + 1, {
        id: uid(),
        content: '',
        element: 'text'
      })
    )

    const eventTarget = event.target as Element
    const newBlockTarget = eventTarget.nextElementSibling as HTMLElement
    newBlockTarget.focus()
    setCaretToEnd(newBlockTarget)
  }

  const handleDeleteBlock: KeyboardBlockEventHandler = (_, block) => {
    if (!(block.content === '' || block.content === null)) return

    const blockToRemoveIndex = blocks.findIndex(b => b.id === block.id)
    if (blockToRemoveIndex === 0) return

    setBlocks(prev => arrRemoveAtIndex(prev, blockToRemoveIndex))

    const blockNode = getNodeByDataBlockId(
      blockListRef.current,
      blocks[blockToRemoveIndex - 1].id
    )

    blockNode.focus()
    setCaretToEnd(blockNode)
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

    const blockNode = getNodeByDataBlockId(blockListRef.current, block.id)
    blockNode.focus()
    setCaretToEnd(blockNode)
  }

  return {
    blocks,
    setBlocks,
    handleAddBlock,
    handleDeleteBlock,
    updateBlockValue
  }
}
