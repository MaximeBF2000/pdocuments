import { useState } from 'react'

type UpdateState = <T>(
  inputName: string,
  callbackOrValue?: (event: T) => any | any
) => (event: T) => void

export const useFormState = <FormType>(formState: FormType) => {
  const [state, setState] = useState<typeof formState>(formState)

  const updateState: UpdateState = (inputName, callbackOrValue) => event => {
    setState(prevState => ({
      ...prevState,
      [inputName]:
        callbackOrValue instanceof Function
          ? callbackOrValue(event)
          : callbackOrValue
    }))
  }

  return [state, updateState] as const
}
