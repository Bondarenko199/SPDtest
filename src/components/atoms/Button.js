import React from 'react'
import { string, node } from 'prop-types'

const Button = ({link, className, children}) => (
  <a href={link}
     className={className ? `Button -${className}` : 'Button'}>{children}</a>
)

Button.defaultProps = {
  link: '#',
  children: 'Download'
}

Button.propTypes = {
  link: string.isRequired,
  children: node.isRequired,
  className: string
}

export default Button