import React from 'react'
import { arrayOf, objectOf, string } from 'prop-types'

import { Headline, Text, Button } from '../atoms'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  handleClick = id => {
    let currentEl = document.querySelector('.Tabs-tab.-active')
    let animationDur = parseFloat(getComputedStyle(currentEl).transitionDuration) * 1000

    currentEl.classList.add('-animate')
    setTimeout(
      () => {
        currentEl.classList.remove('-animate')
        this.setState({
          current: +id
        })
      }, animationDur
    )
  }

  render() {
    return (
      <React.Fragment>
        <ul className="Tabs-buttons-list">
          {this.props.tabs.map((el, i) => (
            <li key={el.id}>
              <button className={(i === this.state.current) ?
                "Tabs-button -active" :
                "Tabs-button"}
                      onClick={() => this.handleClick(i)}>{el.name}</button>
            </li>
          ))}
        </ul>
        <ul className="Tabs-list">
          {this.props.tabs.map((el, i) => (
            <li key={el.id}
                className={(i === this.state.current) ?
                  'Tabs-tab -active' :
                  'Tabs-tab'}>
              <div className="Tabs-text">
                <Headline classame="tab">{el.title}</Headline>
                <Text className="spaced">{el.text}</Text>
                <Text className="spaced">{el.subtext}</Text>
                <Button link={el.link}/>
              </div>
              <div className="Tabs-img">
                <img src={el.img} alt={el.name}/>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

Tabs.propTypes = {
  tabs: arrayOf(objectOf(string.isRequired))
}

export default Tabs