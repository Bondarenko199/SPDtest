import React from 'react'

import { PricingSection } from '../components/organisms'

class PricingSectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'pricing options',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      prices: [
        {
          id: '1',
          title: 'Basic',
          currency: '$',
          price: '0',
          desc: 'Free for Life',
          mostPopular: false,
          advantage: [
            '1 gb of space',
            '10 gb of bandwidth',
            '3 websites',
            'basic customization',
            'wordpress integration',
            'email support'
          ]
        },
        {
          id: '2',
          title: 'Professional',
          currency: '$',
          price: '19',
          desc: 'Monthly payment',
          mostPopular: true,
          advantage: [
            '5 gb of space',
            '50 gb of bandwidth',
            '12 websites',
            'advanced customization',
            'wordpress integration',
            'email support'
          ]
        },
        {
          id: '3',
          title: 'Enterprise',
          currency: '$',
          price: '70',
          desc: 'Monthly payment',
          mostPopular: false,
          advantage: [
            'unlimited space',
            'unlimited bandwidth',
            '100 websites',
            'advanced customization',
            'wordpress integration',
            '24/7 customer support'
          ]
        },
      ]
    }
  }

  render() {
    return (
      <PricingSection title={this.state.title}
                      subtitle={this.state.subtitle}
                      prices={this.state.prices}/>
    )
  }
}

export default PricingSectionContainer