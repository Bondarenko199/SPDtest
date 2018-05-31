import React from 'react'
import { string, arrayOf, objectOf } from 'prop-types'

const IconsList = ({className, icons}) => (
  <ul className={className ? `IconsList -${className}` : 'IconsList'}>
    {icons.map(el => (
      <li key={el.id}>
        <a href={el.href}
           className={className ? `Icon -${className}` : 'Icon'}>
          <i className={`fa fa-${el.iconName}`}/>
        </a>
      </li>
    ))}
  </ul>
)

IconsList.propTypes = {
  className: string,
  icons: arrayOf(objectOf(string.isRequired))
}

export default IconsList