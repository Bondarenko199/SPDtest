import React from 'react'

import { Header, Footer } from '../organisms'
import {
  IntroSectionContainer,
  BrandBarSectionContainer,
  TabsSectionContainer,
  SubListSectionContainer,
  PictureSectionContainer,
  ProcessSectionContainer
} from '../../containers'

const Home = () => (
  <React.Fragment>
    <Header/>
    <main className="content">
      <IntroSectionContainer/>
      <BrandBarSectionContainer/>
      <TabsSectionContainer/>
      <SubListSectionContainer/>
      <PictureSectionContainer/>
      <ProcessSectionContainer/>
    </main>
    <Footer/>
  </React.Fragment>
)

export default Home