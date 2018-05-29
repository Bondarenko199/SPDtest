import React from 'react'

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


export default TabsSection