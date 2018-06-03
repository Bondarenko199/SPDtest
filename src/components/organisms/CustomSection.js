import React from 'react'
import { string } from 'prop-types'

import { Wrapper } from '../organisms'
import { SectionHeader } from '../moleculs'
import { Button } from '../atoms'

import bg from '../../assets/parallax.jpg'

class CustomSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgPosition: 0
    }
  }

  sectionRef = node => this.section = node

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    let scrollPos = this.section.getBoundingClientRect().top
    let requiredScrollPos = window.innerHeight
    if (scrollPos < requiredScrollPos && scrollPos > -requiredScrollPos) {
      this.setState({bgPosition: scrollPos / 4})
    }
  }

  render() {
    return (
      <section ref={this.sectionRef} className="CustomSection">
        <div className="CustomSection-parallax"
             style={{
               backgroundImage: `url(${bg})`,
               top: this.state.bgPosition
             }}/>
        <div className="CustomSection-wrapper">
          <Wrapper>
            <SectionHeader title={this.props.title}
                           subtitle={this.props.subtitle}
                           className="light"/>
            <Button link={this.props.link}
                    className="light"/>
          </Wrapper>
        </div>
      </section>
    )
  }
}

CustomSection.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  link: string.isRequired
}

export default CustomSection