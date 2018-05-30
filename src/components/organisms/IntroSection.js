import React from 'react'
import { string, arrayOf, object } from 'prop-types'

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
          <Button link={downloadLink} className="light"/>
        </div>
        <div className="Intro-item">
          <FormWidgetContainer inputs={inputs}/>
        </div>
      </div>
    </Wrapper>
  </section>
)

IntroSection.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
  downloadLink: string.isRequired,
  inputs: arrayOf(object)
}

export default IntroSection