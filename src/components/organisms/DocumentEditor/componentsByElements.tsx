const defaultProps = {
  contentEditable: true,
  suppressContentEditableWarning: true
}

export const componentByElements = {
  h1: ({ ...props }) => (
    <h1 {...defaultProps} {...props} children={props.content} />
  ),
  h3: ({ ...props }) => (
    <h3 {...defaultProps} {...props} children={props.content} />
  ),
  h2: ({ ...props }) => (
    <h2 {...defaultProps} {...props} children={props.content} />
  ),
  p: ({ ...props }) => (
    <p {...defaultProps} {...props} children={props.content} />
  )
} as const
