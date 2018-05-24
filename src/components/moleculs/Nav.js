import React from 'react'

import { Logo, NavItem } from '../atoms'
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
                <NavItem path={el.path}
                         linkName={el.linkName}/>
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