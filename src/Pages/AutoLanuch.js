import React, { Component } from "react"
import { connect } from "react-redux"
import { Segment, Header, Icon } from "semantic-ui-react"
import { selectTestTypeSync } from "../Actions"
import AutoLaunchType from "../Components/AutoLaunchType"
import AutoInstallConfig from "../Components/AutoLaunchConfigInstall"
import AutoUpgradeConfig from "../Components/AutoLaunchConfigUpgrade"

const styles = {
  marginTop: "2rem",
  marginBottom: "2.5rem"
}

class AutoLaunch extends Component {
  render() {
    const { testType, pxeProfiles, rhvhBuilds } = this.props
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
              />
            ) : (
              <AutoUpgradeConfig
                pxe={pxe}
                builds={builds}
              />
            )}
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

const mapStateToProps = ({ testType, pxeProfiles, rhvhBuilds }) => ({
  testType: testType,
  pxeProfiles: pxeProfiles,
  rhvhBuilds: rhvhBuilds
})
export default connect(mapStateToProps, { selectTestTypeSync })(AutoLaunch)
