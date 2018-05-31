import React from 'react'
import { string, arrayOf, objectOf, object } from 'prop-types'
import { NavLink } from 'react-router-dom'

import { Logo } from '../atoms'
import { SubNav } from '../moleculs'
import { Wrapper } from '../organisms'

const Nav = ({className, links, subLinks, popularLinks}) => (
  <div className="Nav-relative">
    <Wrapper>
      <nav className={className ? `Nav -${className}` : 'Nav'}>
        <Logo/>
        <div className="Nav-list-wrapper">
          <ul className="Nav-list">
            {links.map(el => (
              <li key={el.id}>
                <NavLink to={el.path}
                         className="NavItem">{el.linkName}</NavLink>
              </li>
            ))}
          </ul>
          <SubNav subLinks={subLinks}
                  popularLinks={popularLinks}/>
        </div>
      </nav>
    </Wrapper>
  </div>
)

Nav.propTypes = {
  className: string,
  links: arrayOf(objectOf(string.isRequired)),
  subLinks: arrayOf(object),
  popularLinks: arrayOf(object)
}

export default Nav