import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react"
import { fetchServiceAsync } from "../Actions"

class RootContainer extends Component {
  componentDidMount() {
    this.props.fetchServiceAsync()
  }
  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default connect(null, { fetchServiceAsync })(RootContainer)
