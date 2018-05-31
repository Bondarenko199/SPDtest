import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import './config/webFonts'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'

const rootNode = document.getElementById('root')

if (rootNode) {
  ReactDOM.render(<App/>, rootNode)
}
else {
  document.write('Service is currently under maintenance. Please come back later.')
}

registerServiceWorker()
