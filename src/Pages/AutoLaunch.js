import React, { Component } from "react"
import { connect } from "react-redux"
import { Segment, Header, Icon } from "semantic-ui-react"
import {
  selectTestTypeSync,
  addUpgradeTask,
  rmUpgradeTask,
  clearUpgradeTaskQueue
} from "../Actions"
import AutoLaunchType from "../Components/AutoLaunchType"
import AutoInstallConfig from "../Components/AutoLaunchConfigInstall"
import AutoUpgradeConfig from "../Components/AutoLaunchConfigUpgrade"
import AutoLaunchConfigUpgradeQueue from "../Components/AutoLaunchConfigUpgradeQueue"
import { autoInstallTiers, autoUpgradeTiers } from "../Utils/helper"

const styles = {
  marginTop: "2rem",
  marginBottom: "2.5rem"
}

class AutoLaunch extends Component {
  render() {
    const {
      testType,
      pxeProfiles,
      rhvhBuilds,
      history,
      upgradeTaskQueue,
      addUpgradeTask,
      rmUpgradeTask,
      clearUpgradeTaskQueue
    } = this.props
    const pxe = pxeProfiles.map(p => ({ key: p, text: p, value: p }))
    const builds = rhvhBuilds.map(b => ({ key: b, text: b, value: b }))

    return (
      <div>
        <Header as="h2" icon textAlign="center" style={styles}>
          <Icon name="settings" />
          <Header.Content>Automation Configuration Form</Header.Content>
        </Header>
        <Segment.Group raised>
          <Segment textAlign="center">
            <AutoLaunchType
              selectTestTypeSync={this.props.selectTestTypeSync}
              testType={this.props.testType}
            />
          </Segment>
          <Segment padded="very">
            {testType === "auto_install" ? (
              <AutoInstallConfig
                pxe={pxe}
                builds={builds}
                history={history}
                options={autoInstallTiers}
              />
            ) : (
              <AutoUpgradeConfig
                pxe={pxe}
                builds={builds}
                options={autoUpgradeTiers}
                addTask={addUpgradeTask}
              />
            )}
          </Segment>
          <Segment padded="very">
            {testType !== "auto_install" && (
              <AutoLaunchConfigUpgradeQueue
                taskQueue={upgradeTaskQueue}
                rmTask={rmUpgradeTask}
                clearQueue={clearUpgradeTaskQueue}
                history={history}
              />
            )}
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

const mapStateToProps = ({
  testType,
  pxeProfiles,
  rhvhBuilds,
  upgradeTaskQueue
}) => ({
  testType: testType,
  pxeProfiles: pxeProfiles,
  rhvhBuilds: rhvhBuilds,
  upgradeTaskQueue: upgradeTaskQueue
})
export default connect(mapStateToProps, {
  selectTestTypeSync,
  addUpgradeTask,
  rmUpgradeTask,
  clearUpgradeTaskQueue
})(AutoLaunch)
