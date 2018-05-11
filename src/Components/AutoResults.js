import React, { Component } from 'react'
import {
  Segment,
  Table,
  Header,
  Label,
  Menu,
  Icon,
  Button
} from 'semantic-ui-react'

class AutoResults extends Component {
  runType = ks => {
    if (ks.startsWith('ati')) {
      return <Label color="green">install</Label>
    } else if (ks.startsWith('atu')) {
      return <Label color="blue">upgrade</Label>
    } else if (ks.startsWith('atv')) {
      return <Label color="brown">vdsm</Label>
    } else {
      return <Label color="red">unknown</Label>
    }
  }

  parseData = data => {
    let [time, build] = data[0].split('__')
    let type = this.runType(data[1][0][0])
    let ksfiles = data[1][0]
    let results = data[1][1]
    let logurl = data[1][1]['log_url']

    return [type, time, build, ksfiles, results, logurl]
  }

  render() {
    const { title, data } = this.props
    // console.log(Object.entries(data))
    return (
      <Segment textAlign="center" raised>
        <Header as="h3" icon textAlign="center">
          <Header.Content>
            <Label color="blue" size="big">
              {title}
            </Label>
            <Label color="green" size="big">
              {Object.keys(data).length + ' Runs'}
            </Label>
          </Header.Content>
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Build</Table.HeaderCell>
              <Table.HeaderCell>KsFiles</Table.HeaderCell>
              <Table.HeaderCell>Results</Table.HeaderCell>
              <Table.HeaderCell>Upload</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {Object.entries(data).map(row => (
              <Table.Row key={row[0]}>
                <Table.Cell>{this.runType(row[1][0][0])}</Table.Cell>

                <Table.Cell>
                  {row[0].split('__')[0].replace(/-/g, ':')}
                </Table.Cell>

                <Table.Cell>
                  {row[0]
                    .split('__')[1]
                    .replace(/redhat-virtualization-host-/i, '')}
                </Table.Cell>

                <Table.Cell>
                  {row[1][0].map(k => (
                    <Label key={k} size="mini">
                      {k}
                    </Label>
                  ))}
                </Table.Cell>

                <Table.Cell>
                  <Menu compact size="mini">
                    <Menu.Item as="a">
                      <Icon name="circle" color="blue" /> total
                      <Label color="blue" floating size="mini">
                        {row[1][1]['total']}
                      </Label>
                    </Menu.Item>
                    <Menu.Item as="a">
                      <Icon name="check" color="green" /> pass
                      <Label color="green" floating size="mini">
                        {row[1][1]['passed']}
                      </Label>
                    </Menu.Item>
                    <Menu.Item as="a">
                      <Icon name="remove" color="orange" /> fail
                      <Label color="orange" floating size="mini">
                        {row[1][1]['failed']}
                      </Label>
                    </Menu.Item>
                    <Menu.Item as="a">
                      <Icon name="remove" color="red" /> error
                      <Label color="red" floating size="mini">
                        {row[1][1]['error']}
                      </Label>
                    </Menu.Item>
                  </Menu>
                </Table.Cell>

                <Table.Cell>
                  <Button
                    compact
                    size="mini"
                    href={row[1][1]['log_url']}
                    target="_blank"
                    color="teal"
                  >
                    log url
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

export default AutoResults
