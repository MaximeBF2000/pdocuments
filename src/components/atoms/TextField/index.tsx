import React, { HTMLInputTypeAttribute } from 'react'
import type { primitive } from '@/global'
import cx from 'classnames'

interface Props {
  id?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  value?: primitive
  onChange: React.ChangeEventHandler<HTMLInputElement>
  className?: string | string[]
  error?: string
}

export const TextField: React.FC<Props> = ({
  id,
  placeholder,
  type = 'text',
  onChange,
  className,
  error
}) => {
  return (
    <>
      <input
        id={id}
        className={cx('border rounded border-black py-3 px-2', className)}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </>
  )
}
