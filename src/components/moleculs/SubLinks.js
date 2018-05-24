import React from 'react'

import './SubLinks.css'

import { NavLink } from 'react-router-dom'

const SubLinks = ({subLinks}) => (
  <ul className="SubLinks">
    {subLinks.map(el => (
      <li key={el.id} className="SubLinks-list-item">
        <NavLink to={el.path} className="SubLinks-item">{el.linkName}</NavLink>
      </li>
    ))}
  </ul>
)

export default SubLinks