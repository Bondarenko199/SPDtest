import React from 'react'

import { BrandBarSection } from '../components/organisms'

class BrandBarSectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Social Media',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'
    }
  }

  render() {
    return (
      <BrandBarSection title={this.state.title}
                       text={this.state.text}/>
    )
  }
}

export default BrandBarSectionContainer