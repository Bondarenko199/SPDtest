import React from 'react'

import './Button.css'

const Button = ({link, children, className}) => (
  <a href={link}
     className={className ? `Button -${className}` : 'Button'}>{children}</a>
)

export default Button