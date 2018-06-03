import React from 'react'

import { CustomSection } from '../components/organisms'

class CustomSectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'stylish axure design',
      subtitle: 'Use the sections you need, remove the ones you don\'t.  Create gorgeous prototypes faster than ever!',
      link: '#'
    }
  }

  render() {
    return (
      <CustomSection title={this.state.title}
                     subtitle={this.state.subtitle}
                     link={this.state.link}/>
    )
  }
}

export default CustomSectionContainer