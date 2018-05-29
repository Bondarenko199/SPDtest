import React from 'react'

import { Header, Footer } from '../organisms'
import {
  IntroSectionContainer,
  BrandBarSectionContainer,
  TabsSectionContainer,
  SubListSectionContainer,
  PictureSectionContainer
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
    </main>
    <Footer/>
  </React.Fragment>
)

export default Home