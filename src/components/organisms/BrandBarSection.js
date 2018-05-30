import React from 'react'
import { string } from 'prop-types'

import { Wrapper } from './'
import { Headline, Text } from '../atoms'
import { IconsListContainer } from '../../containers'

import './BrandBarSection.css'

const BrandBarSection = ({title, text}) => (
  <section className="BrandBarSection">
    <Wrapper>
      <div className="BrandBarSection-wrapper">
        <div className="BrandBarSection-item-l">
          <Headline className="brand">{title}</Headline>
          <Text>{text}</Text>
        </div>
        <div className="BrandBarSection-item-r">
          <IconsListContainer/>
        </div>
      </div>
    </Wrapper>
  </section>
)

BrandBarSection.propTypes = {
  title: string.isRequired,
  text: string.isRequired
}

export default BrandBarSection