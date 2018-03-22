import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"

import RootContainer from "./Containers/RootContainer"
import ProjectGannt, { iframe } from "./Components/ProjectGannt"
import TopNavBar from "./Components/TopNavBar"

import Home from "./Pages/Home"
import Auto from "./Pages/Auto"
import AutoLaunch from "./Pages/AutoLaunch"
import AirIndex from "./Pages/AirIndex"

class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <RootContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auto" component={Auto} />
            <Route
              exact
              path="/auto/launch"
              render={({ history }) => <AutoLaunch history={history} />}
            />
            <Route
              exact
              path="/gannt"
              render={() => <ProjectGannt iframe={iframe} />}
            />
            <Route exact path="/air" render={() => <AirIndex />} />
          </Switch>
        </RootContainer>
      </div>
    )
  }
}

export default App
