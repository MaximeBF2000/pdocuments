import { useState } from 'react'

export const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue)

  const toggle = (newValue?: any) => {
    if (newValue && typeof newValue === 'boolean') setValue(newValue)
    setValue(prev => !prev)
  }

  return [value, toggle] as const
}
