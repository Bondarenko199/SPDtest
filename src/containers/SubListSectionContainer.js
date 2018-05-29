import React from 'react'

import { SubListSection } from '../components/organisms'

import iconUp from '../assets/icon-up.png'
import iconDown from '../assets/icon-down.png'
import img from '../assets/image-left-sub-list-u260-copy.jpg'

class SubListSectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Sub list section',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
      subList: [
        {
          id: '1',
          title: 'Title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          icon: iconUp
        },
        {
          id: '2',
          title: 'Title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          icon: iconDown
        }
      ],
      img: img
    }
  }

  render() {
    return (
      <SubListSection title={this.state.title}
                      text={this.state.text}
                      subList={this.state.subList}
                      img={this.state.img}/>
    )
  }
}

export default SubListSectionContainer