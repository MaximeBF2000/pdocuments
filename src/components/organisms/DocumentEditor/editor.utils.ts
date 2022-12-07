export const setCaretToEnd = (element: HTMLElement) => {
  const range = document.createRange()
  const selection = window.getSelection()
  range.selectNodeContents(element)
  range.collapse(false)
  selection.removeAllRanges()
  selection.addRange(range)
  element.focus()
}

export const getNodeByDataBlockId = (
  blockListNode: HTMLElement,
  dataBlockId: string
) =>
  blockListNode.querySelector<HTMLDivElement>(`[data-blockid="${dataBlockId}"]`)
