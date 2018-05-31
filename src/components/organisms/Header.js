import React from 'react'
import { string } from 'prop-types'

import { NavContainer } from './../../containers'

const Header = ({className}) => (
  <header className={className ? `Header -${className}` : 'Header'}>
    <NavContainer/>
  </header>
)

Header.propTypes = {
  className: string
}

export default Header