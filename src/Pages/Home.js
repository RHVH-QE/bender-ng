import React, { Component } from "react"
import { Header, Icon, Container } from "semantic-ui-react"

import Service from "../Components/Service"

const serviceList = [
  {
    icon: "github",
    name: "Github Repo",
    status: "checkmark box",
    color: "green",
    desc: "Github organization which holds all source code",
    link: "https://github.com/orgs/RHVH-QE/dashboard"
  },
  {
    icon: "tree",
    name: "Ansible Tower",
    status: "remove circle outline",
    color: "red",
    desc: "Front UI and execuation tools for ansible playbooks",
    link: ""
  }
]

class Home extends Component {
  render() {
    return (
      <Container>
        <Header as="h2" icon textAlign="center">
          <Icon name="settings" />
          <Header.Content>RHVH Team Automation Related Services</Header.Content>
        </Header>
        {serviceList.map(i => (
          <Service
            key={i.name}
            icon={i.icon}
            name={i.name}
            desc={i.desc}
            link={i.link}
            status={i.status}
            color={i.color}
          />
        ))}
      </Container>
    )
  }
}

export default Home
