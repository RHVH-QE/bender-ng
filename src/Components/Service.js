import React, { Component } from "react"

import { Card, Icon, Header } from "semantic-ui-react"

class Service extends Component {
  render() {
    const { icon, name, desc, link, status, color } = this.props
    return (
      <Card raised>
        <Card.Content>
          <Card.Header>
            <Icon name={icon} color="red" size="large" />
            &nbsp; {name}
          </Card.Header>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>

        <Card.Content>
          <Header as="h4">
            current status : &nbsp; &nbsp;
            <Icon name={status} color={color} size="huge" />
          </Header>
        </Card.Content>

        <Card.Content className="extra">
          <a href={link} className="ui button compact primary" target="_blank">
            open
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default Service
