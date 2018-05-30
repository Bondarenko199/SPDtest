import React from 'react'
import { arrayOf, objectOf, string } from 'prop-types'

import './PopularLinks.css'

const PopularLinks = ({popularLinks}) => (
  <ul className="PopularLinks">
    {popularLinks.map(el => (
      <li key={el.id} className="PopularLinks-list-item">
        <a href={el.path}
           className="PopularLinksItem">
          <span className="PopularLinksItem-name">{el.linkName}</span>
          <img src={el.img} alt={el.linkName}
               className="PopularLinksItem-thumbnail"/>
        </a>
      </li>
    ))}
  </ul>
)

PopularLinks.propTypes = {
  popularLinks: arrayOf(objectOf(string.isRequired))
}

export default PopularLinks