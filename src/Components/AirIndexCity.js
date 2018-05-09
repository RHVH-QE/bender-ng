import React, { Component } from 'react'
import { genHighChartConfig } from '../Utils/helper'
import ReactHighcharts from 'react-highcharts'
import { Segment, Button } from 'semantic-ui-react'

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

  summaryText = (city, index) => {}

  render() {
    const { airdata, show } = this.state
    const { city } = this.props
    return (
      <div>
        <Segment raised style={styles.btn}>
          <Button fluid onClick={this.handleClick} color="orange">
            <span>{this.cityCName(city)}</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>{airdata.length !== 0 && airdata[2][1]}</span>
          </Button>
        </Segment>
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
