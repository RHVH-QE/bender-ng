import React, { Component } from "react"
import { Form } from "semantic-ui-react"
import * as API from "../Utils/api"

class AutoInstallConfig extends Component {
  state = {
    pxe: null,
    build: null,
    tslevel: null,
    target_build: null
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = h => {
    if (Object.values(this.state).includes(null)) {
      console.log("wrong")
    } else {
      API.launchAutoInstall(this.state).then(
        resp => (resp ? h.push("/auto") : h.push("/"))
      )
    }
  }

  render() {
    const { pxe, builds, history, options } = this.props
    return (
      <Form onSubmit={() => this.handleSubmit(history)}>
        <Form.Group widths="equal">
          <Form.Select
            name="pxe"
            label="Pxe Profile"
            options={pxe}
            placeholder="select pxe profile from the list"
            onChange={this.handleChange}
          />
          <Form.Select
            name="build"
            label="RHVH Builds"
            options={builds}
            placeholder="select the test build from the list"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="2">
          <Form.Dropdown
            multiple
            selection
            name="tslevel"
            label="Select Test Tier"
            options={options}
            placeholder="select test tier from the list below"
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
