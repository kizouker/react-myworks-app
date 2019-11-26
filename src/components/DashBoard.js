import React, { Component } from 'react'
import Content from './Content'
import Nav from './Nav'

class DashBoard extends Component {
  render() {
    return (
      <div>
        ---- DashBoard ----

        <Nav></Nav>

        <Content></Content>
      </div>
    )
  }
}

export default DashBoard;