import React from 'react'

import { Icon } from '../atoms'

import './IconsList.css'

const IconsList = ({className, icons}) => (
  <ul
    className={className ? `IconsList -${className}` : 'IconsList'}>
    {
      icons.map(el => (
        <li key={el.id}>
          <Icon href={el.href}
                className={className}
                iconName={el.iconName}
          />
        </li>
      ))
    }
  </ul>
)

export default IconsList