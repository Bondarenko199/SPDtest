import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import './Logo.css'

const Logo = ({className}) => (
  <Link to="/">
    <img src={logo}
         alt="Pitch Book"
         className={className ? `Logo -${className}` : 'Logo'}
    />
  </Link>
)

export default Logo