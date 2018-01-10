import React, { Component } from "react"
// import { Button } from "semantic-ui-react"
import { connect } from "react-redux"
import {
  fetchAutoStatusAsync,
  fetchAutoLogsAsync,
  startBackgroundSync,
  stopBackgroundSync
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
    return (
      <div>
        <AutoHeader autoStatus={this.props.autoStatus} />
        <AutoStatus
          autoStatus={this.props.autoStatus}
          autoLogs={this.props.autoLogs}
          gitBranch={this.props.gitBranch}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ autoStatus, autoLogs, gitBranch }) => ({
  autoStatus: autoStatus,
  autoLogs: autoLogs,
  gitBranch: gitBranch
})
export default connect(mapStateToProps, {
  fetchAutoStatusAsync,
  fetchAutoLogsAsync,
  startBackgroundSync,
  stopBackgroundSync
})(Auto)
