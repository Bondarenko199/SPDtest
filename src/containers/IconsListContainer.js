import React from 'react'

import { IconsList } from './../components/moleculs'

class IconsListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      icons: [
        {
          href: 'https://www.facebook.com',
          iconName: 'facebook-f',
          key: '1'
        },
        {
          href: 'https://twitter.com',
          iconName: 'twitter',
          key: '2'
        },
        {
          href: 'https://plus.google.com',
          iconName: 'google-plus',
          key: '3'
        },
        {
          href: 'https://www.pinterest.com',
          iconName: 'pinterest',
          key: '4'
        },
        {
          href: 'https://www.instagram.com',
          iconName: 'instagram',
          key: '5'
        },
        {
          href: 'https://www.stumbleupon.com/',
          iconName: 'stumbleupon',
          key: '6'
        },
        {
          href: '#',
          iconName: 'rss',
          key: '7'
        }
      ]
    }
  }

  render() {
    return (
      <IconsList className={this.props.className} icons={this.state.icons}/>
    )
  }
}

export default IconsListContainer