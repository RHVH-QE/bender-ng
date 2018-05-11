import React, { Component } from 'react'
import { Header, Icon, Grid, Dimmer, Loader } from 'semantic-ui-react'
import Upgrader from '../Components/AutoUpgradeChange'
import * as api from '../Utils/api'

const styles = {}

class AutoUpgradeChangePage extends Component {
  state = {
    repos: [],
    rpms: []
  }

  componentDidMount() {
    api.fetchUpgradeRepos().then(data => this.setState({ repos: data }))
    api
      .fetchUpgradeRpms()
      .then(data => this.setState({ rpms: this.genChoices(data) }))
  }

  genChoices = data => {
    return data.map(x => ({ key: x, text: x, value: x })).reverse()
  }

  render() {
    const { repos, rpms } = this.state
    return (
      <div>
        <Header as="h2" icon textAlign="center" style={styles}>
          <Icon name="transgender" />
          <Header.Content>Change Auto Upgrade Repo</Header.Content>
        </Header>

        <br />

        {(repos.length === 0 || rpms.length === 0) ? (
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        ) : (
            <Grid stackable columns={3}>
              {repos.map(repo => (
                <Grid.Column key={repo.Name}>
                  <Upgrader
                    name={repo.Name}
                    targetName={repo.CurrentTarget}
                    baseUrl={repo.BaseURL}
                    basePath={repo.BasePath}
                    rpms={rpms}
                  />
                </Grid.Column>
              ))}
            </Grid>
          )}
      </div>
    )
  }
}

export default AutoUpgradeChangePage
