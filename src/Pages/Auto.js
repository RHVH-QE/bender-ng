import React, { Component } from "react"
// import { Button } from "semantic-ui-react"
import { connect } from "react-redux"
import {
  fetchAutoStatusAsync,
  fetchAutoLogsAsync,
  startBackgroundSync,
  stopBackgroundSync,
  fetchLastJobResultAsync
} from "../Actions"
import AutoHeader from "../Components/AutoHeader"
import AutoStatus from "../Components/AutoStatus"

class Auto extends Component {
  componentDidMount() {
    this.props.startBackgroundSync()
  }

  componentWillUnmount() {
    this.props.stopBackgroundSync()
  }

  render() {
    const {
      autoStatus,
      autoLogs,
      gitBranch,
      lastJobResult,
      fetchLastJobResultAsync
    } = this.props
    return (
      <div>
        <AutoHeader autoStatus={autoStatus} />
        <AutoStatus
          autoStatus={autoStatus}
          autoLogs={autoLogs}
          gitBranch={gitBranch}
          lastResult={lastJobResult}
          fetchResult={fetchLastJobResultAsync}
        />
      </div>
    )
  }
}

const mapStateToProps = ({
  autoStatus,
  autoLogs,
  gitBranch,
  lastJobResult
}) => ({
  autoStatus: autoStatus,
  autoLogs: autoLogs,
  gitBranch: gitBranch,
  lastJobResult: lastJobResult
})
export default connect(mapStateToProps, {
  fetchAutoStatusAsync,
  fetchAutoLogsAsync,
  startBackgroundSync,
  stopBackgroundSync,
  fetchLastJobResultAsync
})(Auto)
