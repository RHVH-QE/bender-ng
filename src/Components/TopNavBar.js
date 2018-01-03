import React, { Component } from "react"

import { Menu, Container, Icon } from "semantic-ui-react"

class TopNavBar extends Component {
  state = {}

  render() {
    return (
      <Menu className="top" stackable>
        <Container>
          <Menu.Item>
            <Icon name="bitcoin" size="large" />
            <strong>RHVH Project Portal</strong>
          </Menu.Item>
          <Menu.Item>
            <Icon name="empty heart" />
            Services Health
          </Menu.Item>
          <Menu.Item>
            <Icon name="meh" />
            Automation Lanucher
          </Menu.Item>
          <Menu.Item>
            <Icon name="frown" />
            Project Status
          </Menu.Item>
          <Menu.Item>
            <Icon name="mixcloud" />
            Air Quality Index
          </Menu.Item>
          <Menu.Item>
            <Icon name="mail" />
            About And Contact
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default TopNavBar
