import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react"
import {
  fetchServiceAsync,
  fetchRhvhBuildsAsync,
  fetchPxeProfilesAsync
} from "../Actions"

const styles = {
  width: "60%"
}

class RootContainer extends Component {
  componentDidMount() {
    this.props.fetchPxeProfilesAsync()
    this.props.fetchRhvhBuildsAsync()
    this.props.fetchServiceAsync()
  }
  render() {
    return <Container style={styles}>{this.props.children}</Container>
  }
}

export default connect(null, {
  fetchServiceAsync,
  fetchPxeProfilesAsync,
  fetchRhvhBuildsAsync
})(RootContainer)
