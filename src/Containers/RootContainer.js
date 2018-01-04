import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react"
import * as api from "../Utils/api"
import { fetchService } from "../Actions/index"

class RootContainer extends Component {
  componentDidMount() {
    api
      .fetchServicesList()
      .then(data => {
        this.props.fetchService(data)
      })
      .catch(err => console.log(err))
  }
  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default connect(null, { fetchService })(RootContainer)
