import React from 'react'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

const Logo = ({className}) => (
  <Link to="/">
    <img src={logo}
         alt="Pitch Book"
         className={className ? `Logo -${className}` : 'Logo'}
    />
  </Link>
)

Logo.propTypes = {
  className: string
}

export default Logo