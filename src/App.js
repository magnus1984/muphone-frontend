import React, { Component } from 'react'
import Heading from './components/heading'

class App extends Component {
  render() {
    return (
      <div>
        <Heading> &mu;phone verification service; a prototype by <a style={{color:'white'}} href="https://hedgenet.info"> hedgenet.info </a>  </Heading>
        <h1> Hello world from application ! </h1>
      </div>
    )
  }
}

export default App
