import React, { Component } from "react"
import { Table, Button } from "semantic-ui-react"
import * as API from "../Utils/api"

class AutoUpgradeConfigQueue extends Component {
  handleSubmit = h => {
    const { taskQueue, clearQueue } = this.props
    taskQueue.map(x => delete x.id && x)
    API.launchAutoUpgrade(taskQueue).then(resp => {
      if (resp) {
        clearQueue()
        h.push("/auto")
      } else {
        h.push("/")
      }
    })
  }

  render() {
    const { rmTask, taskQueue, history } = this.props
    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>PXE</Table.HeaderCell>
            <Table.HeaderCell>Tier</Table.HeaderCell>
            <Table.HeaderCell>From</Table.HeaderCell>
            <Table.HeaderCell>Upgrade To</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {taskQueue.map(row => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.pxe_profile}</Table.Cell>
              <Table.Cell>{row.test_level}</Table.Cell>
              <Table.Cell>{row.build_name}</Table.Cell>
              <Table.Cell>{row.target_build}</Table.Cell>
              <Table.Cell collapsing textAlign="right">
                <Button onClick={() => rmTask(row)} color="red" compact>
                  Remove
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          {taskQueue.length !== 0 && (
            <Table.Row>
              <Table.HeaderCell colSpan="5">
                <Button onClick={() => this.handleSubmit(history)}>
                  Submit
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          )}
        </Table.Footer>
      </Table>
    )
  }
}

export default AutoUpgradeConfigQueue
