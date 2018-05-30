import React from 'react'
import { arrayOf, object } from 'prop-types'

import { Wrapper } from './'
import { Tabs } from '../moleculs'

import './TabsSection.css'

const TabsSection = ({tabs}) => (
  <section className="TabsSection" id="TabsSection">
    <Wrapper>
      <div className="TabsSection-wrapper">
        <Tabs tabs={tabs}/>
      </div>
    </Wrapper>
  </section>
)

TabsSection.propTypes = {
  tabs: arrayOf(object)
}

export default TabsSection