import React from 'react'

import { Headline, Text, Button } from '../atoms'

import './Tabs.css'

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
                <Text className="tab">{el.text}</Text>
                <Text className="tab">{el.subtext}</Text>
                <Button link={el.link}>Download</Button>
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

export default Tabs