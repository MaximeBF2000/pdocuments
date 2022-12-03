import React from 'react'
import cx from 'classnames'

interface Props {
  children: any
  className?: string
  id: string
  label?: string
}

export const FormGroup: React.FC<Props> = ({
  children,
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cx('flex flex-col', className)}>
      {label && (
        <label className="text-lg font-bold" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
    </div>
  )
}
