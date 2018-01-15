import React, { Component } from "react"
import { Link } from "react-router-dom"

import { Menu, Container, Icon } from "semantic-ui-react"

const styles = {
  color: "black"
}

class TopNavBar extends Component {
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
            <Link to="/" style={styles}>
              Services Health
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Icon name="meh" />
            <Link to="/auto" style={styles}>
              Automation Lanucher
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Icon name="frown" />
            <Link to="/gannt" style={styles}>
              Project Status
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Icon name="mixcloud" />
            <Link to="/air" style={styles}>
              Air Quality Index
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Icon name="mail outline" />
            <Link to="/about" style={styles}>
              About And Contact
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default TopNavBar
