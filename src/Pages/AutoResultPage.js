import React, { Component } from 'react'
import { Header, Icon, Dimmer, Loader, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Result from '../Components/AutoResults'

const styles = {
  marginTop: '2rem',
  marginBottom: '2.5rem'
}

class AutoResultPage extends Component {
  state = {
    subLogSummary: 1,
    start: 0,
    end: 1
  }

  changeSkip = (start, end) => {
    this.setState({ start, end })
  }

  render() {
    const { logSummary } = this.props
    const { start, end } = this.state
    const easylog = Object.entries(logSummary).reverse()
    return (
      <div>
        <Header as="h2" icon textAlign="center" style={styles}>
          <Icon name="file text" />
          <Header.Content>Auto Test Run Results</Header.Content>
        </Header>
        <Button.Group>
          <Button color="green" onClick={() => this.changeSkip(0, 3)}>
            last 3 days
          </Button>
          <Button.Or />
          <Button color="blue" onClick={() => this.changeSkip(0, 7)}>
            last week
          </Button>
          <Button.Or />
          <Button color="red" onClick={() => this.changeSkip(0, 30)}>
            last month
          </Button>
          <Button.Or />
          <Button
            color="black"
            onClick={() => this.changeSkip(0, easylog.length)}
          >
            all results
          </Button>
        </Button.Group>
        {Object.keys(logSummary).length === 0 ? (
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        ) : (
          easylog
            .slice(start, end)
            .map(r => <Result key={r[0]} title={r[0]} data={r[1]} />)
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ logSummary }) => ({ logSummary: logSummary })
export default connect(mapStateToProps, null)(AutoResultPage)
