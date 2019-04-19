import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Home from "./screen/Home"
import Signin from "./screen/Signin"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </div>
    )
  }
}

export default App
