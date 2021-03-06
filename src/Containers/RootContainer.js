import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import {
  fetchServiceAsync,
  fetchRhvhBuildsAsync,
  fetchPxeProfilesAsync,
  fetchLogSummaryAsync
} from '../Actions'

const styles = {
  width: '65%'
}

class RootContainer extends Component {
  componentDidMount() {
    this.props.fetchPxeProfilesAsync()
    this.props.fetchRhvhBuildsAsync()
    this.props.fetchServiceAsync()
    this.props.fetchLogSummaryAsync()
  }
  render() {
    return <Container style={styles}>{this.props.children}</Container>
  }
}

export default connect(null, {
  fetchServiceAsync,
  fetchPxeProfilesAsync,
  fetchRhvhBuildsAsync,
  fetchLogSummaryAsync
})(RootContainer)
