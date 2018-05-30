import React from 'react'

import { ProcessSection } from '../components/organisms'

import firstImg from '../assets/processes-1.png'
import secondImg from '../assets/processes-2.png'
import thirdImg from '../assets/processes-3.png'

class ProcessSectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'why this is awesome',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      processes: [
        {
          id: '1',
          title: 'Thoughtful Design',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. roin gravida dolor sit amet lacus accumsan et viverra.',
          img: firstImg
        },
        {
          id: '2',
          title: 'Well Crafted',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.',
          img: secondImg
        },
        {
          id: '3',
          title: 'Easy to Customize',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.',
          img: thirdImg
        }
      ]
    }
  }

  render() {
    return (
      <ProcessSection title={this.state.title}
                      subtitle={this.state.subtitle}
                      processes={this.state.processes}/>
    )
  }
}

export default ProcessSectionContainer