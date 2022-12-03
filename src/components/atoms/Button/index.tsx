import React from 'react'
import cx from 'classnames'

interface Props {
  children: any
  type?: 'button' | 'submit'
  onClick: React.MouseEventHandler
  className?: string
}

export const Button: React.FC<Props> = ({
  children,
  type = 'button',
  onClick,
  className
}) => {
  return (
    <button
      className={cx('block py-3 px-8 bg-black text-white rounded', className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
