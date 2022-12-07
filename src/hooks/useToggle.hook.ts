import { useState } from 'react'

export const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue)

  const toggle = (newValue?: any) => {
    if (typeof newValue === 'boolean') return setValue(newValue)
    setValue(prev => !prev)
  }

  return [value, toggle] as const
}
