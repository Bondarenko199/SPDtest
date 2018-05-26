import React from 'react'

import { Header, Footer } from '../organisms'
import {
  IntroSectionContainer,
  BrandBarSectionContainer
} from '../../containers'

const Home = () => (
  <React.Fragment>
    <Header/>
    <main className="content">
      <IntroSectionContainer/>
      <BrandBarSectionContainer/>
    </main>
    <Footer/>
  </React.Fragment>
)

export default Home