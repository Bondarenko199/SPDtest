import React from 'react'

import { Wrapper, SubList } from './'
import { Headline, Text } from '../atoms'

import './SubListSection.css'

const SubListSection = ({title, text, subList, img}) => (
  <section className="SubListSection">
    <Wrapper>
      <div className="SubListSection-wrapper">
        <div className="SubListSection-img-wrapper">
          <img src={img} alt={title} className="SubListSection-img"/>
        </div>
        <div className="SubListSection-text-wrapper">
          <Headline className="sublist">{title}</Headline>
          <Text className="sublist">{text}</Text>
          <SubList subList={subList}/>
        </div>
      </div>
    </Wrapper>
  </section>
)

export default SubListSection