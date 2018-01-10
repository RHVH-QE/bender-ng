import React, { Component } from "react"
import { Form } from "semantic-ui-react"
import * as API from "../Utils/api"

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
]

class AutoInstallConfig extends Component {
  state = {
    pxe: "",
    builds: ""
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    API.launchAutoInstall(this.state)
  }
  render() {
    const { pxe, builds } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Select
            name="pxe"
            label="Pxe Profile"
            options={pxe}
            placeholder="select pxe profile from the list"
            onChange={this.handleChange}
          />
          <Form.Select
            name="builds"
            label="RHVH Builds"
            options={builds}
            placeholder="select the test build from the list"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="2">
          <Form.Select
            name="tier"
            label="Select Test Tier"
            options={options}
            placeholder="select pxe profile from the list"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button positive size="large">
          Submit
        </Form.Button>
      </Form>
    )
  }
}

export default AutoInstallConfig
