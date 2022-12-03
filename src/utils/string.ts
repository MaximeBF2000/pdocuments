export const uid = (complexity = 2) => {
  const id = []
  for (let i = 0; i < complexity; i++)
    id.push(Date.now().toString(36) + Math.random().toString(36).slice(2))
  return id.join('')
}
