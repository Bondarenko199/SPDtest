import React from 'react'
import { string, arrayOf, object } from 'prop-types'

import { Wrapper } from './'
import { SectionHeader } from '../moleculs'
import { FormContainer } from '../../containers'

const ContactSection = ({title, subtitle, inputs}) => (
  <section className="ContactSection">
    <Wrapper>
      <SectionHeader title={title}
                     subtitle={subtitle}/>
      <FormContainer inputs={inputs}/>
    </Wrapper>
  </section>
)

ContactSection.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  inputs: arrayOf(object)
}

export default ContactSection