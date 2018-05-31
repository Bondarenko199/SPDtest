import React from 'react'
import { string, arrayOf, objectOf } from 'prop-types'

class FormWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form
        className={this.props.className ? `FormWidget -${this.props.className}` : 'FormWidget'}>
        <h3 className="FormWidget-title">Try your <span
          className="FormWidget-title-color">free</span> trial today</h3>
        <div className="FormWidget-wrapper">
          {this.props.inputs.map(el => (
            <input key={el.id}
                   id={el.id}
                   type={el.type}
                   name={el.name.toLowerCase()}
                   placeholder={el.name}
                   value={this.state[el.name]}
                   onChange={this.handleChange}/>
          ))}
        </div>
        <button type="submit">Get Started</button>
      </form>

    )
  }
}

FormWidget.propTypes = {
  className: string,
  inputs: arrayOf(objectOf(string.isRequired))
}

export default FormWidget