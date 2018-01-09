import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchAutoStatusAsync, fetchAutoLogsAsync } from "../Actions"
import AutoHeader from "../Components/AutoHeader"
import AutoStatus from "../Components/AutoStatus"

class Auto extends Component {
  componentDidMount() {
    this.props.fetchAutoStatusAsync()
    this.props.fetchAutoLogsAsync()
  }
  render() {
    return (
      <div>
        <AutoHeader autoStatus={this.props.autoStatus} />
        <AutoStatus
          autoStatus={this.props.autoStatus}
          autoLogs={this.props.autoLogs}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ autoStatus, autoLogs }) => ({
  autoStatus: autoStatus,
  autoLogs: autoLogs
})
export default connect(mapStateToProps, {
  fetchAutoStatusAsync,
  fetchAutoLogsAsync
})(Auto)
