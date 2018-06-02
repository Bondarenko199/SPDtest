import React from 'react'

import { TestimonialsSection } from '../components/organisms'

import img from '../assets/avatar.jpg'

class TestimonialsSectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'what our customers are saying',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      testimonials: [
        {
          id: '1',
          author: 'Jeremy H.',
          position: 'Manager',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
          img: img
        },
        {
          id: '2',
          author: 'John S.',
          position: 'Freelancer',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
          img: img
        },
        {
          id: '3',
          author: 'Susan W.',
          position: 'Photographer',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
          img: img
        },
        {
          id: '4',
          author: 'Jeremy H.',
          position: 'Manager',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
          img: img
        },
        {
          id: '5',
          author: 'John S.',
          position: 'Freelancer',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
          img: img
        },
        {
          id: '6',
          author: 'Susan W.',
          position: 'Photographer',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
          img: img
        },
        {
          id: '7',
          author: 'Jeremy H.',
          position: 'Manager',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
          img: img
        },
        {
          id: '8',
          author: 'John S.',
          position: 'Freelancer',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
          img: img
        },
        {
          id: '9',
          author: 'Susan W.',
          position: 'Photographer',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
          img: img
        }
      ]
    }
  }

  render() {
    return (
      <TestimonialsSection title={this.state.title}
                           subtitle={this.state.subtitle}
                           testimonials={this.state.testimonials}/>
    )
  }
}

export default TestimonialsSectionContainer