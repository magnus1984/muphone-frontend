import React, { Component } from 'react'
import Heading from './components/heading'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/home'
import Invalid from './pages/invalid'
import Valid from './pages/valid'
import Verification from './pages/verification'

class App extends Component {
  render() {
    return (
      <div>
        <Heading>
            &mu;phone verification service; a prototype from the creator of <a style={{color:'white'}} href="https://hedgenet.info"> hedgenet.info </a>
        </Heading>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/invalid" component={Invalid} />
                <Route path="/valid" component={Valid} />
                <Route path="/verification" component={Verification} />
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
