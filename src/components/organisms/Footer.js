import React from 'react'

import { Container } from './'
import {IconsListContainer} from '../../containers'

import './Footer.css'

const Footer = () => (
  <footer className='Footer'>
    <Container>
      <IconsListContainer className="footer"/>
      <p className="copyrights">&copy; 2016 PitchBook</p>
    </Container>
  </footer>
)

export default Footer