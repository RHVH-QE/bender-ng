import React, { Component } from "react"

import { Card, Icon, Header } from "semantic-ui-react"

class Service extends Component {
  getStatusIcon = status =>
    status ? "checkmark box green large" : "remove red large"
  getBtn = status =>
    status ? "ui button compact primary" : "ui button compact red disabled"

  render() {
    const { icon, name, desc, link, status } = this.props
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
            <Icon className={this.getStatusIcon(status)} />
          </Header>
        </Card.Content>

        <Card.Content className="extra">
          <a href={link} className={this.getBtn(status)} target="_blank">
            open
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default Service
