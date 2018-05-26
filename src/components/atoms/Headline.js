import React from 'react'

import './Headline.css'

const Headline = ({className, children}) => (
  <h2 className={className ? `Headline -${className}` : 'Headline'}>{children}</h2>
)

export default Headline