import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"

import { Container } from "semantic-ui-react"
import ExampleChart from "./Components/Gannt"
import TopNavBar from "./Components/TopNavBar"

import Home from "./Pages/Home"

class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gannt" component={ExampleChart} />
          </Switch>
        </Container>
      </div>
    )
  }
}

export default App
