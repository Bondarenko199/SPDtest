import React from 'react'

import './IconsList.css'

const IconsList = ({className, icons}) => (
  <ul className={className ? `IconsList -${className}` : 'IconsList'}>
    {
      icons.map(el => (
        <li key={el.id}>
          <a href={el.href}
             className={className ? `Icon -${className}` : 'Icon'}>
            <i className={`fa fa-${el.iconName}`}/>
          </a>
        </li>
      ))
    }
  </ul>
)

export default IconsList