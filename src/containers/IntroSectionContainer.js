import React from 'react'

import { IntroSection } from '../components/organisms'

class IntroSectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'modern axure template for beautiful prototypes',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
      downloadLink: '/#',
      inputs: [
        {
          id: '1',
          type: 'text',
          name: 'Name'
        },
        {
          id: '2',
          type: 'email',
          name: 'Email'
        },
        {
          id: '3',
          type: 'password',
          name: 'Password'
        }
      ]
    }
  }

  render() {
    return (
      <IntroSection title={this.state.title}
                    text={this.state.text}
                    downloadLink={this.state.downloadLink}
                    inputs={this.state.inputs}/>
    )
  }
}

export default IntroSectionContainer