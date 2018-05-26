import React from 'react'
import { NavLink } from 'react-router-dom'

import { Logo } from '../atoms'
import { SubNav } from '../moleculs'
import { Wrapper } from '../organisms'

import './Nav.css'

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

export default Nav