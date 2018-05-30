import React from 'react'

import { PictureSection } from '../components/organisms'

import img from '../assets/picture-section-img.jpg'

class PictureSectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Standard Picture Section',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
      subText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
      img: img
    }
  }

  render() {
    return (
      <PictureSection title={this.state.title}
                      text={this.state.text}
                      subText={this.state.subText}
                      img={this.state.img}/>
    )
  }
}

export default PictureSectionContainer