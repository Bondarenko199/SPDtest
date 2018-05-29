import React from 'react'

import { Text } from '../atoms'

import './SubList.css'

const SubList = ({subList}) => (
  <ul className="SubList">
    {subList.map(el => (
      <li key={el.id} className="SubList-item">
        <div className="SubList-item-icon-wrapper">
          <img src={el.icon} alt={el.title}/>
        </div>
        <div className="SubList-item-text-wrapper">
          <h3 className="SubList-item-headline">{el.title}</h3>
          <Text>{el.text}</Text>
        </div>
      </li>
    ))}
  </ul>
)

export default SubList