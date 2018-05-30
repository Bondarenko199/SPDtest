import React from 'react'
import { string, arrayOf, object } from 'prop-types'

import { Wrapper, ProcessList } from './'
import { SectionHeader } from '../moleculs'

import './ProcessSection.css'

const ProcessSection = ({title, subtitle, processes}) => (
  <section className="ProcessSection">
    <Wrapper>
      <SectionHeader title={title}
                     subtitle={subtitle}/>
      <ProcessList processes={processes}/>
    </Wrapper>
  </section>
)

ProcessSection.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  processes: arrayOf(object)
}

export default ProcessSection