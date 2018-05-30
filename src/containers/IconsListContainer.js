import React from 'react'
import { string } from 'prop-types'

import { IconsList } from './../components/moleculs'

class IconsListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      icons: [
        {
          id: '1',
          href: 'https://www.facebook.com',
          iconName: 'facebook-f'
        },
        {
          id: '2',
          href: 'https://twitter.com',
          iconName: 'twitter'
        },
        {
          id: '3',
          href: 'https://plus.google.com',
          iconName: 'google-plus'
        },
        {
          id: '4',
          href: 'https://www.pinterest.com',
          iconName: 'pinterest'
        },
        {
          id: '5',
          href: 'https://www.instagram.com',
          iconName: 'instagram'
        },
        {
          id: '6',
          href: 'https://www.stumbleupon.com/',
          iconName: 'stumbleupon'
        },
        {
          id: '7',
          href: '#',
          iconName: 'rss'
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

IconsListContainer.propTypes = {
  className: string
}

export default IconsListContainer