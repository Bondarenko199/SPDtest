import React from 'react'

import { ContactSection } from '../components/organisms'

class ContactSectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'contact us',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
          type: 'text',
          name: 'Subject'
        },
        {
          id: '4',
          type: 'textarea',
          name: 'Message',
        }
      ]
    }
  }

  render() {
    return (
      <ContactSection title={this.state.title}
                      subtitle={this.state.subtitle}
                      inputs={this.state.inputs}/>
    )
  }
}

export default ContactSectionContainer