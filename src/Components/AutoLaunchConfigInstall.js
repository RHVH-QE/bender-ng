import React, { Component } from "react"
import { Form } from "semantic-ui-react"

const styles = {
  marginTop: "5rem"
}

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
]

class AutoInstallConfig extends Component {
  render() {
    const { pxe, builds } = this.props
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Select
            label="Pxe Profile"
            options={pxe.map(p => ({ key: p, text: p, value: p }))}
            placeholder="select pxe profile from the list"
          />
          <Form.Select
            label="RHVH Builds"
            options={builds.map(b => ({ key: b, text: b, value: b }))}
            placeholder="select the test build from the list"
          />
        </Form.Group>
        <Form.Group widths="2">
          <Form.Select
            label="Select Test Tier"
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

const mapStateToProps = ({ autoStatus, autoLogs, gitBranch }) => ({
  autoStatus: autoStatus,
  autoLogs: autoLogs,
  gitBranch: gitBranch
})
export default AutoInstallConfig
