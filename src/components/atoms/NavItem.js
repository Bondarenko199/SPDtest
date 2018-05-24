import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavItem.css'

const NavItem = ({path, linkName}) => (
  <NavLink to={path} className="NavItem">{linkName}</NavLink>
)

export default NavItem
