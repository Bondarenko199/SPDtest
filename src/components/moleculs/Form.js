import React from 'react'
import { string, arrayOf, objectOf } from 'prop-types'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form
        className={this.props.className ? `Form -${this.props.className}` : 'Form'}
        onSubmit={this.handleSubmit}>
        <div className="Form-wrapper">
          <div className="Form-wrapper-l">
            {this.props.inputs.map(el => (
              (el.type !== 'textarea')
                ?
                <input key={el.id}
                       type={el.type}
                       name={el.name.toLowerCase()}
                       placeholder={el.name}
                       value={this.state[el.name]}
                       onChange={this.handleChange}/>
                : null
            ))}
          </div>
          <div className="Form-wrapper-r">
            {this.props.inputs.map(el => (
              (el.type === 'textarea')
                ?
                <textarea key={el.id}

                          name={el.name.toLowerCase()}
                          placeholder={el.name}
                          value={this.state[el.name]}
                          onChange={this.handleChange}/>
                : null
            ))}
          </div>
        </div>
        <button type="submit">Send Message</button>
      </form>
    )
  }
}

Form.propTypes = {
  className: string,
  inputs: arrayOf(objectOf(string.isRequired))
}

export default Form
