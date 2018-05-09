import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'
import City from '../Components/AirIndexCity'

const styles = {
  marginTop: '2rem',
  marginBottom: '2.5rem'
}

class AirIndex extends Component {
  render() {
    return (
      <div>
        <Header as="h2" icon textAlign="center" style={styles}>
          <Icon name="cloud" color="green" />
          <Header.Content>Air Quality Index</Header.Content>
        </Header>
        <City city="beijing" />
        <City city="shanghai" />
        <City city="guangzhou" />
        <City city="chengdu" />
      </div>
    )
  }
}

export default AirIndex
