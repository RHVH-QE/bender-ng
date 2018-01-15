import React, { Component } from "react"
import { Segment, Table, Button, Statistic } from "semantic-ui-react"

class AutoStatus extends Component {
  render() {
    const { fetchResult, lastResult } = this.props
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
      <Segment.Group raised>
        <Segment padded>
          <Table basic="very" striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width="three">Name</Table.HeaderCell>
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

        <Segment padded>
          <Button primary size="small" compact onClick={fetchResult}>
            Get Last Job Result
          </Button>
        </Segment>

        {lastResult.sum && (
          <Segment padded>
            <Statistic.Group>
              <Statistic color="black">
                <Statistic.Value>{lastResult.sum.total}</Statistic.Value>
                <Statistic.Label>Total</Statistic.Label>
              </Statistic>
              <Statistic color="green">
                <Statistic.Value>{lastResult.sum.passed}</Statistic.Value>
                <Statistic.Label>Passed</Statistic.Label>
              </Statistic>
              <Statistic color="red">
                <Statistic.Value>{lastResult.sum.failed}</Statistic.Value>
                <Statistic.Label>Failed</Statistic.Label>
              </Statistic>
              <Statistic color="orange">
                <Statistic.Value>{lastResult.sum.error}</Statistic.Value>
                <Statistic.Label>Error</Statistic.Label>
              </Statistic>
            </Statistic.Group>
          </Segment>
        )}
      </Segment.Group>
    )
  }
}

export default AutoStatus
