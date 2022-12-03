import React from 'react'

export interface DocumentEditorProps {}

export interface Block {
  id: string
  content: string
  element: string
}

export interface BlockProps {
  content: string
  onKeyDown: React.KeyboardEventHandler
  onInput: React.ChangeEventHandler
  className: string
  'data-blockid': string
}
