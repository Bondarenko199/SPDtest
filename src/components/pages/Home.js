import React from 'react'

import { Header, Footer } from '../organisms'

const Home = () => (
  <React.Fragment>
    <Header/>
    <main className="content">
      <p>Hello World Home</p>
    </main>
    <Footer/>
  </React.Fragment>
)

export default Home