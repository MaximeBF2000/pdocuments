import { useRef } from 'react'
import type { KeyboardBlockEventHandler, MenuData } from './editor.d'
import { getNodeByDataBlockId } from './editor.utils'
import { useToggle } from '@/hooks'

interface UseMenu {
  menuRef: React.MutableRefObject<HTMLElement>
  blockListRef: React.MutableRefObject<HTMLUListElement>
}

export const useMenu = ({ menuRef, blockListRef }: UseMenu) => {
  const [showMenu, toggleShowMenu] = useToggle()
  const menuData = useRef<MenuData>({ x: null, y: null, block: null })

  const openMenu: KeyboardBlockEventHandler = (event, block) => {
    const blockNode = getNodeByDataBlockId(blockListRef.current, block.id)

    menuData.current = {
      x: blockNode.offsetLeft,
      y: blockNode.offsetTop + blockNode.clientHeight,
      block
    }

    document.addEventListener('click', closeMenu)
    toggleShowMenu(true)
  }

  const closeMenu = event => {
    if (menuRef.current?.contains(event?.target)) return
    toggleShowMenu(false)
    document.removeEventListener('click', closeMenu)
  }

  return {
    menuRef,
    showMenu,
    openMenu,
    closeMenu,
    menuData
  }
}
