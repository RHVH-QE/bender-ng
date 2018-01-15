import React, { Component } from "react"
import { Form } from "semantic-ui-react"
import { rhvh4GABuilds, autoUpgradeTiers, uuidv4 } from "../Utils/helper"

class AutoUpgradeConfig extends Component {
  state = {
    pxe_profile: "",
    test_level: "",
    build_name: "",
    target_build: ""
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { pxe, builds, addTask } = this.props
    return (
      <Form onSubmit={() => addTask({ ...this.state, id: uuidv4() })}>
        <Form.Group widths="equal">
          <Form.Select
            label="Pxe Profile"
            options={pxe}
            placeholder="select pxe profile from the list"
            onChange={this.handleChange}
            name="pxe_profile"
          />
          <Form.Select
            label="Select Test Tier"
            options={autoUpgradeTiers}
            placeholder="select pxe profile from the list"
            onChange={this.handleChange}
            name="test_level"
          />
        </Form.Group>
        <Form.Group widths="2">
          <Form.Select
            label="From GA Build"
            options={rhvh4GABuilds}
            placeholder="select pxe profile from the list"
            onChange={this.handleChange}
            name="build_name"
          />
          <Form.Select
            label="Destination Build"
            options={builds}
            placeholder="select pxe profile from the list"
            onChange={this.handleChange}
            name="target_build"
          />
        </Form.Group>
        <Form.Button positive size="large">
          Add To Queue
        </Form.Button>
      </Form>
    )
  }
}

export default AutoUpgradeConfig
