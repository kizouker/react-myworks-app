import React, { Component } from 'react'
import Home from './Home.js'
import About from './About.js'
import MyWorks from './MyWorks.js'

class Nav extends Component {
  render() {
    return (
      <div>
        <Home></Home><About></About><MyWorks></MyWorks>
      </div>
      
    )
  }
}

export default Nav