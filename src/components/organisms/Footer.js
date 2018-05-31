import React from 'react'

import { Wrapper } from './'
import { IconsListContainer } from '../../containers'

const Footer = () => (
  <footer className='Footer'>
    <Wrapper>
      <IconsListContainer className="footer"/>
      <p className="copyrights">&copy; 2016 PitchBook</p>
    </Wrapper>
  </footer>
)

export default Footer