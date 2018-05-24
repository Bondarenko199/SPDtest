import React from 'react'

import './Icon.css'

const Icon = ({href, className, iconName}) => (
  <a href={href}
     className={className ? `Icon -${className}` : 'Icon'}>
    <i className={`fa fa-${iconName}`}/>
  </a>
)

export default Icon