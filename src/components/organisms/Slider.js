import React from 'react'
import {
  oneOfType,
  string,
  number,
  arrayOf,
  element
} from 'prop-types'

import { Image } from '../atoms'

import arrow from '../../assets/arrow.png'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      space: 0
    }
  }

  sliderRef = node => this.slider = node
  slidesCount = +this.props.slidesCount
  margin = +this.props.slideMargin
  animationDuration = +this.props.animationDuration
  timingFunction = this.props.timingFunction
  items = this.props.children.length

  componentDidMount() {
    window.addEventListener('resize', this.setState({step: this.slider.clientWidth}))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setState())
  }

  sliderListStile = () => {
    const space = this.state.space
    return ({
      marginLeft: -this.margin,
      transition: `${this.animationDuration}ms ${this.timingFunction}`,
      transform: `translateX(-${space}px)`
    })
  }

  sliderItemStyle = () => {
    const minWidth = (this.state.step / this.slidesCount - this.margin) + (this.margin / this.slidesCount)
    return ({
      minWidth: minWidth,
      marginLeft: this.margin
    })
  }

  handleRightMove = () => {
    this.items -= this.slidesCount

    if (this.items > 0) {
      this.setState(prevState => ({space: prevState.space + prevState.step + this.margin}))
    }
    else {
      this.items = this.props.children.length
      this.setState({space: 0})
    }
  }

  handleLeftMove = () => {
    if (this.state.space > 0) {
      this.items += this.slidesCount
      this.setState(prevState => ({space: prevState.space - prevState.step - this.margin}))
    }
  }

  render() {
    return (
      <div className="Slider">
        <div ref={this.sliderRef}
             className="Slider-wrapper">
          <ul className="Slider-list"
              style={this.sliderListStile()}>
            {this.props.children.map(el => (
              <li key={el.key}
                  className="Slider-item"
                  style={this.sliderItemStyle()}>{el}</li>
            ))}
          </ul>
        </div>
        <span className="Slider-arrow"
              onClick={this.handleLeftMove}>
          <Image src={arrow} alt="arrow"/>
        </span>
        <span className="Slider-arrow -right"
              onClick={this.handleRightMove}>
          <Image src={arrow} alt="arrow"/>
        </span>
      </div>
    )
  }
}

Slider.defaultProps = {
  slidesCount: 1,
  slideMargin: 0,
  animationDuration: 500,
  timingFunction: 'ease-in-out'
}

Slider.propTypes = {
  slidesCount: oneOfType([string, number]),
  slideMargin: oneOfType([string, number]),
  animationDuration: oneOfType([string, number]),
  timingFunction: string,
  children: arrayOf(element).isRequired
}

export default Slider