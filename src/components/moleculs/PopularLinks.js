import React from 'react'

import { PopularLinksItem } from '../atoms'

import './PopularLinks.css'

const PopularLinks = ({popularLinks}) => (
  <ul className="PopularLinks">
    {popularLinks.map(el => (
      <li key={el.id} className="PopularLinks-list-item">
        <PopularLinksItem path={el.path} linkName={el.linkName}/>
      </li>
    ))}
  </ul>
)

export default PopularLinks