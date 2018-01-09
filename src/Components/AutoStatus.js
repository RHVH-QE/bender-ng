import React, { Component } from "react"
import { Segment, Table } from "semantic-ui-react"

class AutoStatus extends Component {
  render() {
    const { pxe, host, tier } = this.props.autoStatus
    const { build, ks, log } = this.props.autoLogs
    return (
      <Segment padded>
        <Table basic="very" striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>PXE Profile</Table.Cell>
              <Table.Cell>{pxe}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Test Tier</Table.Cell>
              <Table.Cell>{tier}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Host Machine</Table.Cell>
              <Table.Cell>{host}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Build Name</Table.Cell>
              <Table.Cell>{build}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Kickstart File</Table.Cell>
              <Table.Cell>{ks}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <strong>Current Log :: </strong>
              </Table.Cell>
              <Table.Cell>{log}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

export default AutoStatus
