import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from ''

const rootNode = document.getElementById('root')

if (rootNode) {
  ReactDOM.render(
    <App/>,
    rootNode
  )
}
else {
  document.write('Service is currently under maintenance. Please come back later.')
}

registerServiceWorker();
