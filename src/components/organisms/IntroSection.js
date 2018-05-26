import React from 'react'

import { Wrapper } from './'
import { Text, Button } from '../atoms'
import { FormWidgetContainer } from '../../containers'

import './IntroSection.css'
import background from '../../assets/header-panel.jpg'

const IntroSection = ({title, text, downloadLink, inputs}) => (
  <section className="Intro" style={{backgroundImage: `url(${background})`}}>
    <Wrapper>
      <div className="Intro-wrapper">
        <div className="Intro-item">
          <h1 className="Intro-title">{title}</h1>
          <Text className="intro">{text}</Text>
          <Button link={downloadLink} className="light">Download</Button>
        </div>
        <div className="Intro-item">
          <FormWidgetContainer inputs={inputs}/>
        </div>
      </div>
    </Wrapper>
  </section>
)

export default IntroSection