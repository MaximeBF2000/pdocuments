import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { arrUpdateAtIndex } from '@/utils/array'
import { blockTypes } from './blockTypes'
import { BlockType, KeyboardKeys, MenuProps } from './editor.d'
import { getNodeByDataBlockId, setCaretToEnd } from './editor.utils'

const StyledMenu = styled.div`
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
`

export const Menu: React.FC<MenuProps> = ({
  x,
  y,
  onClose,
  menuRef,
  blockListRef,
  block,
  setBlocks
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState('')

  const filteredBlocksTypes = blockTypes.filter(blockType =>
    blockType.label.toLowerCase().includes(search.toLowerCase())
  )

  const closeMenuOnEscapeKey = event => {
    if (event.key === KeyboardKeys.ESCAPE) return onClose()
  }

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('keydown', closeMenuOnEscapeKey)
      searchInputRef.current.focus()
    }, 0)

    return () => {
      document.removeEventListener('keydown', closeMenuOnEscapeKey)
    }
  }, [])

  const setBlockType = async (blockType: BlockType) => {
    const findBlockById = currentBlock => currentBlock.id === block.id

    await setBlocks(prev =>
      arrUpdateAtIndex(prev, prev.findIndex(findBlockById), {
        ...prev.find(findBlockById),
        element: blockType.element
      })
    )

    const blockNode = getNodeByDataBlockId(blockListRef.current, block.id)
    blockNode.focus()
    setCaretToEnd(blockNode)
    onClose()
  }

  return (
    <StyledMenu
      className={`bg-white shadow absolute rounded`}
      x={x}
      y={y}
      ref={menuRef}
    >
      <ul role="listbox">
        <input
          ref={searchInputRef}
          className="border m-2 rounded outline-none px-2 py-1"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {filteredBlocksTypes.map(blockType => (
          <li
            key={blockType.element}
            className="px-8 py-4 cursor-pointer border-b flex outline-none hover:bg-gray-200 focus:bg-gray-200"
            onClick={() => setBlockType(blockType)}
            onKeyDown={event =>
              event.key === KeyboardKeys.ENTER && setBlockType(blockType)
            }
            role="option"
            tabIndex={0}
          >
            <h4 className="text-black font-medium">{blockType.label}</h4>
            <p className="ml-4 italic text-gray-400">{blockType.element}</p>
          </li>
        ))}
      </ul>
    </StyledMenu>
  )
}
