import React, { Component } from "react"
import { Segment, Table } from "semantic-ui-react"

class AutoStatus extends Component {
  render() {
    const { pxe, host, tier } = this.props.autoStatus
    const { build, ks, log } = this.props.autoLogs
    const git = this.props.gitBranch
    const tableData = [
      { name: "Git Branch", value: git },
      { name: "PXE Profile", value: pxe },
      { name: "Test Tier", value: tier },
      { name: "Host Machine", value: host },
      { name: "Build Name", value: build },
      { name: "Kickstart File", value: ks },
      { name: "Current Log", value: log }
    ]
    return (
      <Segment padded>
        <Table basic="very" striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width="two">Name</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableData.map(row => (
              <Table.Row key={row.name}>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.value}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

export default AutoStatus
