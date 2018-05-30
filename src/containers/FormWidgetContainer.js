import React from 'react'
import { arrayOf, object } from 'prop-types'

import { FormWidget } from '../components/moleculs'

class FormWidgetContainer extends React.Component {
  render() {
    return (
      <FormWidget inputs={this.props.inputs}/>
    )
  }
}

FormWidgetContainer.propTypes = {
  inputs: arrayOf(object)
}

export default FormWidgetContainer