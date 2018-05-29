import React from 'react'

import './Image.css'

const Image = ({src, alt, className}) => (
  <img src={src} alt={alt} className={className ? `Image -${className}` : 'Image'}/>
)

export default Image