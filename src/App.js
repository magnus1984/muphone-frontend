import React, { Component } from 'react'
import Heading from './components/heading'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Heading> &mu;phone verification service; a prototype from the creator of <a style={{color:'white'}} href="https://hedgenet.info"> hedgenet.info </a>  </Heading>
        <h1> Hello world from application ! </h1>
      </div>
    )
  }
}

export default App
