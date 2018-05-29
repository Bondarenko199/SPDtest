import React from 'react'

import { Wrapper, SubList } from './'
import { Headline, Text, Image } from '../atoms'

import './SubListSection.css'

const SubListSection = ({title, text, subList, img}) => (
  <section className="SubListSection">
    <Wrapper>
      <div className="SubListSection-wrapper">
        <div className="SubListSection-img-wrapper">
          <Image src={img} alt={title} className="decorated"/>
        </div>
        <div className="SubListSection-text-wrapper">
          <Headline className="decorated">{title}</Headline>
          <Text className="sublist">{text}</Text>
          <SubList subList={subList}/>
        </div>
      </div>
    </Wrapper>
  </section>
)

export default SubListSection