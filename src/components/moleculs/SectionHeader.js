import React from 'react'
import { string } from 'prop-types'

const SectionHeader = ({className, title, subtitle}) => (
  <div className={className ? `SectionHeader -${className}` : 'SectionHeader'}>
    <h2 className="SectionHeader-title">{title}</h2>
    <p className="SectionHeader-subtitle">{subtitle}</p>
  </div>
)

SectionHeader.propTypes = {
  className: string,
  title: string.isRequired,
  subtitle: string.isRequired
}

export default SectionHeader