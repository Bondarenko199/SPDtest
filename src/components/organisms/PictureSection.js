import React from 'react'
import { string } from 'prop-types'

import { Wrapper } from './'
import { Headline, Text, Image } from '../atoms'

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

PictureSection.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
  subText: string.isRequired,
  img: string.isRequired
}

export default PictureSection