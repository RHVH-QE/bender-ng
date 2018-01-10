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
    const { testType } = this.props
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
                pxe={this.props.pxeProfiles}
                builds={this.props.rhvhBuilds}
              />
            ) : (
              <AutoUpgradeConfig
                pxe={this.props.pxeProfiles}
                builds={this.props.rhvhBuilds}
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
