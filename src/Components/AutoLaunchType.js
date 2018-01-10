import React, { Component } from "react"
import { Button } from "semantic-ui-react"

class AutoLaunchType extends Component {
  render() {
    const { selectTestTypeSync, testType } = this.props
    return (
      <Button.Group size="huge">
        <Button
          onClick={() => selectTestTypeSync("auto_install")}
          className={testType === "auto_install" ? "primary" : ""}
        >
          Installation Test
        </Button>
        <Button.Or />
        <Button
          onClick={() => selectTestTypeSync("auto_upgrade")}
          className={testType === "auto_upgrade" ? "primary" : ""}
        >
          Upgrade Test
        </Button>
      </Button.Group>
    )
  }
}

export default AutoLaunchType
