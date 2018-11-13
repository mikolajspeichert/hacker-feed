import React, { Component } from 'react'
import { GlobalStyles } from '../../styled'
import Header from '../../components/Header'
import Feed from '../Feed'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Header normalText="hacker" boldText="Feed" />
        <Feed />
      </div>
    )
  }
}

export default App
