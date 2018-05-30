import React from 'react'
import { node } from 'prop-types'

import './Wrapper.css'

const Wrapper = ({children}) => (
  <div className="Wrapper">
    {children}
  </div>
)

Wrapper.propTypes = {
  children: node.isRequired
}

export default Wrapper