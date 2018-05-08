import React, { Component } from 'react'
import { Card, Icon, Header, Dropdown } from 'semantic-ui-react'
import * as api from '../Utils/api'

class UpgradeChanger extends Component {
  state = {
    changing: false
  }

  cleanBuildName = name => {
    return name.replace(/redhat-virtualization-host-image-update-/, '')
  }

  handleChange = (event, data) => {
    let result = window.confirm(`change target to [[ ${data.value} ]] ?`)
    if (result) {
      this.setState({ changing: true })
      api.changeUpgradeRpm(this.props.name, data.value).then(data => {
        window.alert(data)
        this.setState({ changing: false })
      })
    }
  }

  render() {
    const { name, desc, targetName, baseUrl, rpms } = this.props
    const { changing } = this.state

    return (
      <Card raised fluid>
        <Card.Content>
          <Card.Header>
            <Icon name="transgender" color="red" size="large" />
            &nbsp; {name}
          </Card.Header>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>

        <Card.Content>
          <Header as="h4">Current Pointed Build:</Header>
          <Header as="h4">{this.cleanBuildName(targetName)}</Header>
          <Header as="h4">
            <a href={baseUrl} target="_blank">
              BASE URL
            </a>
          </Header>
        </Card.Content>

        <Card.Content className="extra">
          <Dropdown
            text="Change Target"
            options={rpms}
            floating
            button
            search
            onChange={this.handleChange}
            loading={changing}
          />
        </Card.Content>
      </Card>
    )
  }
}

export default UpgradeChanger
