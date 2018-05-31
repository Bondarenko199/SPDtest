import React from 'react'
import { arrayOf, objectOf, string } from 'prop-types'

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

SubLinks.propTypes = {
  subLinks: arrayOf(objectOf(string.isRequired))
}

export default SubLinks