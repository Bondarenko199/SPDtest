import React from 'react'
import { arrayOf, objectOf, string } from 'prop-types'

import { Image } from '../atoms'

import './ProcessList.css'

const ProcessList = ({processes}) => (
  <ul className="ProcessList">
    {processes.map(el => (
      <li key={el.id} className="ProcessList-item">
        <div className="ProcessList-icon">
          <Image src={el.img} alt={el.title}/>
        </div>
        <h3 className="ProcessList-title">{el.title}</h3>
        <p className="ProcessList-text">{el.text}</p>
      </li>
    ))}
  </ul>
)

ProcessList.propTypes = {
  processes: arrayOf(objectOf(string))
}


export default ProcessList