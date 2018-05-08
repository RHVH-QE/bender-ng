import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogSummaryAsync } from '../Actions'

class AutoResultPage extends Component {
  state = {
    subLogSummary: []
  }

  componentDidMount() {
    this.props.fetchLogSummaryAsync()
  }
  render() {
    return <h1>Under Development</h1>
  }
}

const mapStateToProps = ({ logSummary }) => ({ logSummary: logSummary })
export default connect(mapStateToProps, { fetchLogSummaryAsync })(
  AutoResultPage
)
