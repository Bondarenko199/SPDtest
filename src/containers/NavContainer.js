import React from 'react'

import { Nav } from './../components/moleculs'

class NavContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          linkName: 'Features',
          path: '/features',
          id: '1'
        },
        {
          linkName: 'About',
          path: '/about',
          id: '2'
        },
        {
          linkName: 'Pricing',
          path: '/pricing',
          id: '3'
        },
        {
          linkName: 'Reviews',
          path: '/reviews',
          id: '4'
        },
        {
          linkName: 'Contact',
          path: '/contact',
          id: '5'
        }
      ],
      subLinks: [
        {
          linkName: 'Product',
          path: '/#',
          id: '1'
        },
        {
          linkName: 'API and Datafeed',
          path: '/#',
          id: '2'
        },
        {
          linkName: 'Platform',
          path: '/#',
          id: '3'
        },
        {
          linkName: 'Mobile',
          path: '/#',
          id: '4'
        },
        {
          linkName: 'News & Analysis',
          path: '/#',
          id: '5'
        },
        {
          linkName: 'Reports',
          path: '/#',
          id: '6'
        },
        {
          linkName: 'Videos',
          path: '/#',
          id: '7'
        },
        {
          linkName: 'Subscribe to N&A',
          path: '/#',
          id: '8'
        }, {
          linkName: 'News & Analysis',
          path: '/#',
          id: '9'
        },
        {
          linkName: 'Reports',
          path: '/#',
          id: '10'
        },
        {
          linkName: 'Videos',
          path: '/#',
          id: '11'
        },
        {
          linkName: 'Subscribe to N&A',
          path: '/#',
          id: '12'
        },
        {
          linkName: 'News & Analysis',
          path: '/#',
          id: '13'
        },
        {
          linkName: 'Reports',
          path: '/#',
          id: '14'
        },
        {
          linkName: 'Videos',
          path: '/#',
          id: '15'
        },
        {
          linkName: 'Subscribe to N&A',
          path: '/#',
          id: '16'
        },
      ],
      popularLinks: [
        {
          linkName: 'About Us',
          path: '/#',
          id: '1'
        }, {
          linkName: 'Our Partners',
          path: '/#',
          id: '2'
        }, {
          linkName: 'Careers',
          path: '/#',
          id: '3'
        }, {
          linkName: 'Contact Us',
          path: '/#',
          id: '4'
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