import React from 'react'

import './PopularLinksItem.css'

import linkThumbnail from '../../assets/popular-link-thumbnail.jpg'

const PopularLinksItem = ({path, linkName}) => (
  <a href={path} className="PopularLinksItem">
    <span className="PopularLinksItem-name">{linkName}</span>
    <img src={linkThumbnail} alt={linkName} className="PopularLinksItem-thumbnail"/>
  </a>
)

export default PopularLinksItem