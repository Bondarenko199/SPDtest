import React from 'react'

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

export default ProcessSection