import React from 'react'
import { arrayOf, objectOf, string } from 'prop-types'

import { Form } from '../components/moleculs'

class FormContainer extends React.Component {
  render() {
    return (
      <Form inputs={this.props.inputs}/>
    )
  }
}

FormContainer.propTypes = {
  inputs: arrayOf(objectOf(string))
}

export default FormContainer