import React from 'react'
import { string, node } from 'prop-types'

import './Text.css'

const Text = ({className, children}) => (
  <p className={className ? `Text -${className}` : 'Text'}>{children}</p>
)

Text.propTypes = {
  className: string,
  children: node.isRequired
}

export default Text