import React from 'react'

import { NavContainer } from './../../containers'

import './Header.css'

const Header = ({className}) => (
  <header className={className ? `Header -${className}` : 'Header'}>
    <NavContainer/>
  </header>
)

export default Header