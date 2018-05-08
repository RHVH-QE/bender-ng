import React, { Component } from 'react'
import { genHighChartConfig } from '../Utils/helper'
import ReactHighcharts from 'react-highcharts'
import { Segment, Button, Label } from 'semantic-ui-react'

const styles = {
  btn: {
    marginBottom: '10px'
  }
}

class AirIndexCity extends Component {
  static airApi = 'ws://10.73.73.23:8081/tower'

  state = {
    airdata: [],
    show: false
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

  handleClick = (event, data) => {
    this.setState({ show: !this.state.show })
  }

  cityCName = en => {
    switch (en) {
      case 'beijing':
        return '北京'
      case 'shanghai':
        return '上海'
      case 'guangzhou':
        return '广州'
      case 'chengdu':
        return '成都'
      default:
        return '地球'
    }
  }

  render() {
    const { airdata, show } = this.state
    const { city } = this.props
    return (
      <div>
        <Button
          fluid
          size="massive"
          basic
          onClick={this.handleClick}
          style={styles.btn}
        >
          <Label size="massive" color="blue">
            {this.cityCName(city)}
          </Label>
          {airdata.length !== 0 && (
            <Label size="massive" color="red">
              {airdata[2][1]}
            </Label>
          )}
          <Label size="massive" color="green">
            Click For Detail
          </Label>
        </Button>
        {show && (
          <Segment raised>
            <ReactHighcharts
              ref="chart"
              config={genHighChartConfig(this.props.city, airdata)}
            />
          </Segment>
        )}
      </div>
    )
  }
}

export default AirIndexCity
