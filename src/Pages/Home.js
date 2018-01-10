import React, { Component } from "react"
import { connect } from "react-redux"
import { Header, Icon, Grid, Message } from "semantic-ui-react"

import Service from "../Components/Service"

const styles = {
  marginTop: "2rem",
  marginBottom: "2.5rem"
}

class Home extends Component {
  render() {
    const { services } = this.props
    return (
      <div>
        <Header as="h2" icon textAlign="center" style={styles}>
          <Icon name="home" />
          <Header.Content>RHVH Team Automation Related Services</Header.Content>
        </Header>

        <Grid stackable columns={4}>
          {services.length === 0 ? (
            <Message
              error
              header="There was some errors when fetch services status"
              list={["connection lost", "try later"]}
            />
          ) : (
            services.map(i => (
              <Grid.Column key={i.name}>
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
            ))
          )}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ services }) => ({ services: services })
export default connect(mapStateToProps, null)(Home)
