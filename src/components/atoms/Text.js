import React from 'react'

import './Text.css'

const Text = ({className, children}) => (
  <p className={className ? `Text -${className}` : 'Text'}>{children}</p>
)

export default Text