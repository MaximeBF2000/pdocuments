import React, { useRef } from 'react'
import { BlockProps, KeyboardBlockEventHandler, KeyboardKeys } from './editor.d'
import { Menu } from './Menu.component'
import { componentByElements } from './componentsByElements'
import { useToggle } from '@/hooks'
import { useMenu } from './useMenu.hook'
import { useBlocks } from './useBlocks.hook'

export const DocumentEditor: React.FC = () => {
  const blockListRef = useRef<HTMLUListElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const [_, toggleIsShifting] = useToggle()

  const {
    blocks,
    setBlocks,
    handleAddBlock,
    handleDeleteBlock,
    updateBlockValue
  } = useBlocks({ blockListRef })

  const { menuData, showMenu, openMenu, closeMenu } = useMenu({
    menuRef,
    blockListRef
  })

  const handleKeyUp: KeyboardBlockEventHandler = (event, _) => {
    if (event.key === KeyboardKeys.SLASH) return toggleIsShifting(false)
  }

  const handleKeyDown: KeyboardBlockEventHandler = (event, block) => {
    switch (event.key) {
      case KeyboardKeys.SHIFT:
        return toggleIsShifting(true)
      case KeyboardKeys.ENTER:
        return handleAddBlock(event, block)
      case KeyboardKeys.BACKSPACE:
        return handleDeleteBlock(event, block)
      case KeyboardKeys.SLASH:
        return openMenu(event, block)
      default:
        return
    }
  }

  return (
    <div className="bg-white w-full p-4">
      <ul
        ref={blockListRef}
        className="outline-none"
        // contentEditable
        // suppressContentEditableWarning
        // onKeyDown={parentEvent => console.log({ parentEvent })}
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
              onKeyUp={event => handleKeyUp(event, block)}
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
      {showMenu && (
        <Menu
          menuRef={menuRef}
          x={menuData.current.x}
          y={menuData.current.y}
          blockListRef={blockListRef}
          block={menuData.current.block}
          setBlocks={setBlocks}
          onClose={closeMenu}
        />
      )}
    </div>
  )
}
