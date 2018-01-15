import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Header, Icon, Button } from "semantic-ui-react"

const styles = {
  topHeader: {
    marginTop: "2rem",
    marginBottom: "2.5rem"
  },
  btnGroup: {
    marginTop: "1rem"
  }
}

class AutoHeader extends Component {
  render() {
    return (
      <Header as="h2" icon textAlign="center" style={styles.topHeader}>
        <Icon name="object group" />

        <Header.Content>
          {!this.props.autoStatus.running ? (
            <Button.Group style={styles.btnGroup}>
              <Button size="huge" color="green">
                IDLE
              </Button>
              <Button size="huge" basic color="green">
                <Link to="/auto/launch">Lanuch Test</Link>
              </Button>
            </Button.Group>
          ) : (
            <Button.Group style={styles.btnGroup}>
              <Button size="huge" color="red">
                BUSY
              </Button>
              <Button size="huge" basic color="red" disabled>
                <strong>TEST IS RUNNING</strong>
              </Button>
            </Button.Group>
          )}
        </Header.Content>
      </Header>
    )
  }
}

export default AutoHeader
