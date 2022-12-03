export const arrInsertAtIndex = <T = any>(
  arr: T[],
  index: number,
  item: T
): T[] => [...arr.slice(0, index), item, ...arr.slice(index)]

export const arrRemoveAtIndex = <T = any>(arr: T[], index: number): T[] => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1, arr.length)
]

export const arrUpdateAtIndex = <T = any>(arr: T[], index: number, item: T) => [
  ...arr.slice(0, index),
  item,
  ...arr.slice(index + 1, arr.length)
]
