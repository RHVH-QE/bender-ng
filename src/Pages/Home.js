import React, { Component } from "react"
import { Header, Icon, Container, Grid } from "semantic-ui-react"

import Service, { serviceList } from "../Components/Service"

const styles = {
  marginTop: "2rem",
  marginBottom: "2.5rem"
}

class Home extends Component {
  render() {
    return (
      <Container>
        <Header as="h2" icon textAlign="center" style={styles}>
          <Icon name="settings" />
          <Header.Content>RHVH Team Automation Related Services</Header.Content>
        </Header>

        <Grid stackable columns={4}>
          {serviceList.map(i => (
            <Grid.Column>
              <Service
                key={i.name}
                icon={i.icon}
                name={i.name}
                desc={i.desc}
                link={i.link}
                status={i.status}
                color={i.color}
              />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    )
  }
}

export default Home
