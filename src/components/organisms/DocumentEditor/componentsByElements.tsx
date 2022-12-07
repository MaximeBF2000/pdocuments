import cx from 'classnames'

const defaultProps = {
  contentEditable: true,
  suppressContentEditableWarning: true
}

export const componentByElements = {
  h1: ({ ...props }) => (
    <h1
      {...defaultProps}
      {...props}
      className={cx('font-black text-4xl', props.className)}
      children={props.content}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      {...defaultProps}
      {...props}
      className={cx('font-extrabold text-3xl', props.className)}
      children={props.content}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      {...defaultProps}
      {...props}
      className={`font-bold text-2xl ${props.className}`}
      children={props.content}
    />
  ),
  text: ({ ...props }) => (
    <p {...defaultProps} {...props} children={props.content} />
  )
} as const
