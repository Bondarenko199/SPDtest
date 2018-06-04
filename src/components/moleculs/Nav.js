import React from 'react'
import { string, arrayOf, objectOf, object } from 'prop-types'
import { NavLink } from 'react-router-dom'

import { Logo } from '../atoms'
import { SubNav } from '../moleculs'
import { Wrapper } from '../organisms'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  render() {
    return (
      <React.Fragment>
        <div className="Nav-relative">
          <Wrapper>
            <nav
              className={this.props.className ? `Nav -${this.props.className}` : 'Nav'}>
              <Logo/>
              <div className="Nav-list-wrapper">
                <ul className="Nav-list">
                  {this.props.links.map(el => (
                    <li key={el.id}>
                      <NavLink to={el.path}
                               className="NavItem">{el.linkName}</NavLink>
                    </li>
                  ))}
                </ul>
                <SubNav subLinks={this.props.subLinks}
                        popularLinks={this.props.popularLinks}/>
              </div>
            </nav>
          </Wrapper>
        </div>
        <div className="Nav-mobile">
          <div className="Nav-mobile-wrapper">
            <div/>
            <Logo/>
            <button onClick={this.toggle}
                    className="Nav-mobile-toggle">
              <span/>
              <span/>
              <span/>
            </button>
          </div>
          <div style={!this.state.show ? {left: '-100%'} : null}
               className="Nav-mobile-dropdown">
            <ul className="Nav-mobile-list">
              {this.props.links.map(el => (
                <li key={el.id}>
                  <NavLink to={el.path}
                           className="NavItem-mobile">{el.linkName}</NavLink>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </React.Fragment>
    )
  }
}

Nav.propTypes = {
  className: string,
  links: arrayOf(objectOf(string.isRequired)),
  subLinks: arrayOf(object),
  popularLinks: arrayOf(object)
}

export default Nav