import React from 'react'
import { string } from 'prop-types'

const Image = ({src, alt, className}) => (
  <img src={src} alt={alt}
       className={className ? `Image -${className}` : 'Image'}/>
)

Image.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  className: string
}

export default Image