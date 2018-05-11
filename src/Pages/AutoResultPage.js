import React, { Component } from 'react'
import { Header, Icon, Dimmer, Loader, Dropdown } from 'semantic-ui-react'
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
    end: 1,
  }

  changeSkip = (start = 0, end = 1) => {
    this.setState({ start, end })
  }

  selectDate = (e, d) => {
    let ei = Object.keys(this.props.logSummary).reverse().findIndex(e => e === d.text)
    console.log(ei)
    if (ei === -1) {
      this.setState()
    } else {
      this.setState({ start: ei, end: ei + 1 })
    }
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

        <Dropdown text='Filter Results' icon='filter' scrolling floating labeled button className='icon'>
          <Dropdown.Menu >
            <Dropdown.Header icon='tags' content='Filter by time span' />
            <Dropdown.Divider />
            <Dropdown.Item icon='circle' text='latest' onClick={() => this.changeSkip(0, 1)} />
            <Dropdown.Item icon='circle' text='last week' onClick={() => this.changeSkip(0, 7)} />
            <Dropdown.Item icon='circle' text='last month' onClick={() => this.changeSkip(0, 30)} />
            <Dropdown.Header icon='tags' content='Filter by date' />
            <Dropdown.Divider />
            {Object.keys(logSummary).map(d => (
              <Dropdown.Item icon='circle' text={d} key={d} onClick={this.selectDate} />
            ))}
          </Dropdown.Menu>
        </Dropdown>

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
