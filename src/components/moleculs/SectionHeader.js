import React from 'react'

import './SectionHeader.css'

const SectionHeader = ({title, subtitle, className}) => (
  <div className={className ? `SectionHeader -${className}` : 'SectionHeader'}>
    <h2 className="SectionHeader-title">{title}</h2>
    <p className="SectionHeader-subtitle">{subtitle}</p>
  </div>
)

export default SectionHeader