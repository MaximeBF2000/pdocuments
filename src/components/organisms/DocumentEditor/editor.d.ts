import React from 'react'

export interface Block {
  id: string
  content: string
  element: string
}

export interface BlockType {
  element: string
  label: string
  image?: string
}

export interface BlockProps {
  content: string
  onKeyUp: React.KeyboardEventHandler
  onKeyDown: React.KeyboardEventHandler
  onInput: React.ChangeEventHandler
  className: string
  'data-blockid': string
}

export type KeyboardBlockEventHandler = (
  event: React.KeyboardEvent,
  block: Block
) => void

export interface MenuProps {
  x: number
  y: number
  onClose?: (event?: any) => void
  blockListRef: React.MutableRefObject<HTMLUListElement>
  menuRef: React.MutableRefObject<HTMLElement>
  block: Block
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>
}

export interface MenuData {
  x?: number
  y?: number
  block?: Block
}

export enum KeyboardKeys {
  ESCAPE = 'Escape',
  SHIFT = 'Shift',
  ENTER = 'Enter',
  BACKSPACE = 'Backspace',
  SLASH = '/'
}
