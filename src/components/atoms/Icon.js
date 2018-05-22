import React from 'react'

import './Icon.css'

const Icon = props => (
  <a href={props.href}
     className={props.className ? `Icon -${props.className}` : 'Icon'}>
    <i className={`fa fa-${props.iconName}`}/>
  </a>
)

export default Icon