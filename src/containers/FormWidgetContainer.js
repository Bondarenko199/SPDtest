import React from 'react'

import { FormWidget } from '../components/moleculs'

class FormWidgetContainer extends React.Component {
  render() {
    return (
      <FormWidget inputs={this.props.inputs}/>
    )
  }
}

export default FormWidgetContainer