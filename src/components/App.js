import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
  Home,
  Features,
  About,
  Pricing,
  Reviews,
  Contact,
  Error
} from './pages/'

import './App.css'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/features" component={Features}/>
        <Route path="/about" component={About}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/reviews" component={Reviews}/>
        <Route path="/contact" component={Contact}/>
        <Route component={Error}/>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;
