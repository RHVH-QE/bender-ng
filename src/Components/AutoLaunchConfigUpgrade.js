import React, { Component } from "react"
import { Form } from "semantic-ui-react"

const styles = {
  marginTop: "5rem"
}

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
]

class AutoUpgradeConfig extends Component {
  render() {
    const value = {}
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Select
            label="Pxe Profile"
            options={options}
            placeholder="select pxe profile from the list"
          />
          <Form.Select
            label="Select Test Tier"
            options={options}
            placeholder="select pxe profile from the list"
          />
        </Form.Group>
        <Form.Group widths="2">
          <Form.Select
            label="From GA Build"
            options={options}
            placeholder="select pxe profile from the list"
          />
          <Form.Select
            label="Destination Build"
            options={options}
            placeholder="select pxe profile from the list"
          />
        </Form.Group>
        <Form.Button positive size="large">
          Submit
        </Form.Button>
      </Form>
    )
  }
}

export default AutoUpgradeConfig
