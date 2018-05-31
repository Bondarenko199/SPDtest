import React from 'react'
import { string, node } from 'prop-types'

const Headline = ({className, children}) => (
  <h2
    className={className ? `Headline -${className}` : 'Headline'}>{children}</h2>
)

Headline.propTypes = {
  className: string,
  children: node.isRequired
}

export default Headline