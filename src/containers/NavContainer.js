import React from 'react'

import { Nav } from '../components/moleculs'

import img from '../assets/popular-link-thumbnail.jpg'

class NavContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          id: '1',
          linkName: 'Features',
          path: '/features'
        },
        {
          id: '2',
          linkName: 'About',
          path: '/about'
        },
        {
          id: '3',
          linkName: 'Pricing',
          path: '/pricing'
        },
        {
          id: '4',
          linkName: 'Reviews',
          path: '/reviews'
        },
        {
          id: '5',
          linkName: 'Contact',
          path: '/contact'
        }
      ],
      subLinks: [
        {
          id: '1',
          linkName: 'Product',
          path: '/#'
        },
        {
          id: '2',
          linkName: 'API and Datafeed',
          path: '/#'
        },
        {
          id: '3',
          linkName: 'Platform',
          path: '/#'
        },
        {
          id: '4',
          linkName: 'Mobile',
          path: '/#'
        },
        {
          id: '5',
          linkName: 'News & Analysis',
          path: '/#'
        },
        {
          id: '6',
          linkName: 'Reports',
          path: '/#'
        },
        {
          id: '7',
          linkName: 'Videos',
          path: '/#'
        },
        {
          id: '8',
          linkName: 'Subscribe to N&A',
          path: '/#'
        }, {
          id: '9',
          linkName: 'News & Analysis',
          path: '/#'
        },
        {
          id: '10',
          linkName: 'Reports',
          path: '/#'
        },
        {
          id: '11',
          linkName: 'Videos',
          path: '/#'
        },
        {
          id: '12',
          linkName: 'Subscribe to N&A',
          path: '/#'
        },
        {
          id: '13',
          linkName: 'News & Analysis',
          path: '/#'
        },
        {
          id: '14',
          linkName: 'Reports',
          path: '/#'
        },
        {
          id: '15',
          linkName: 'Videos',
          path: '/#'
        },
        {
          id: '16',
          linkName: 'Subscribe to N&A',
          path: '/#'
        },
      ],
      popularLinks: [
        {
          id: '1',
          linkName: 'About Us',
          path: '/#',
          img: img
        }, {
          id: '2',
          linkName: 'Our Partners',
          path: '/#',
          img: img
        }, {
          id: '3',
          linkName: 'Careers',
          path: '/#',
          img: img
        }, {
          id: '4',
          linkName: 'Contact Us',
          path: '/#',
          img: img
        }
      ]
    }
  }

  render() {
    return (
      <Nav links={this.state.links}
           subLinks={this.state.subLinks}
           popularLinks={this.state.popularLinks}/>
    )
  }
}

export default NavContainer