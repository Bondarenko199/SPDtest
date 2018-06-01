import React from 'react'
import { string, arrayOf, object } from 'prop-types'

import { Wrapper, PricingList } from './'
import { SectionHeader } from '../moleculs'

const PricingSection = ({title, subtitle, prices}) => (
  <section className="PricingSection">
    <Wrapper>
      <div className="PricingSection-wrapper">
        <SectionHeader title={title} subtitle={subtitle}/>
        <PricingList prices={prices}/>
      </div>
    </Wrapper>
  </section>
)

PricingSection.propTypes = {
  title: string,
  subtitle: string,
  prices: arrayOf(object)
}

export default PricingSection