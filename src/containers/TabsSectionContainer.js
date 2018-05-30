import React from 'react'

import { TabsSection } from '../components/organisms'

import img from '../assets/tabs-image.png'

class TabsSectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        {
          id: '1',
          name: 'tab 1',
          title: 'Tabs with soft transitioning effect. 1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
          subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          link: '#',
          img: img
        },
        {
          id: '2',
          name: 'tab 2',
          title: 'Tabs with soft transitioning effect. 2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
          subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          link: '#',
          img: img
        },
        {
          id: '3',
          name: 'tab 3',
          title: 'Tabs with soft transitioning effect. 3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
          subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          link: '#',
          img: img
        }
      ]
    }
  }

  render() {
    return (
      <TabsSection tabs={this.state.tabs}/>
    )
  }
}

export default TabsSectionContainer