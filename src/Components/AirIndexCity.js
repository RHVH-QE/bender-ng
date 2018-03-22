import React, { Component } from "react"
import { genHighChartConfig } from "../Utils/helper"
import ReactHighcharts from "react-highcharts"
import { Segment } from "semantic-ui-react"

class AirIndexCity extends Component {
  static airApi = "ws://10.73.73.23:8081/tower"

  state = {
    airdata: []
  }

  componentDidMount() {
    let ws = new WebSocket(AirIndexCity.airApi)
    ws.onopen = event => {
      ws.send(this.props.city)
    }
    ws.onmessage = resp => {
      this.setState({ airdata: JSON.parse(resp.data) })
    }
  }
  render() {
    const { airdata } = this.state
    return (
      <Segment raised>
        <ReactHighcharts
          ref="chart"
          config={genHighChartConfig(this.props.city, airdata)}
        />
      </Segment>
    ) 
  }
}

export default AirIndexCity
