import React from 'react'

import { Wrapper } from './'
import { Headline, Text, Image } from '../atoms'

import './PictureSection.css'

const PictureSection = ({title, text, subText, img}) => (
  <section className="PictureSection">
    <Wrapper>
      <div className="PictureSection-wrapper">
        <div className="PictureSection-text-wrapper">
         <Headline className="decorated">{title}</Headline>
          <Text className="spaced">{text}</Text>
          <Text>{subText}</Text>
        </div>
        <div className="PictureSection-img-wrapper">
          <Image src={img} alt={title} className="decorated -right"/>
        </div>
      </div>
    </Wrapper>
  </section>
)

export default PictureSection