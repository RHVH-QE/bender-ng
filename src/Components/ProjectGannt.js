import React, { Component } from "react"

class ProjectGannt extends Component {
  iframe() {
    return {
      __html: this.props.iframe
    }
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.iframe()} />
      </div>
    )
  }
}

export const iframe =
  '<iframe src="http://10.73.73.23:7788/rhvh_auto.html" width="1200" height="600"></iframe>'

export default ProjectGannt
