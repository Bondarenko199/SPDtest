import React from 'react'

import { Icon } from './../atoms'

import './IconsList.css'

const IconsList = props => (
  <ul
    className={props.className ? `IconsList -${props.className}` : 'IconsList'}>
    {
      props.icons.map(el => (
        <li key={el.key}>
          <Icon href={el.href}
                    className={props.className}
                    iconName={el.iconName}
          />
        </li>
      ))
    }
  </ul>
)

export default IconsList