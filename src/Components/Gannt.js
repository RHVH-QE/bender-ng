import React, { Component } from 'react'

import { Chart } from 'react-google-charts'

class ExampleChart extends Component {
  constructor(props) {
    super(props)
    this.chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
          // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
          console.log('Selected ', Chart.chart.getSelection())
        }
      }
    ]
    this.state = {
      options: {},
      rows: [
        [
          'r01',
          'assets managment system',
          'yaniwang@redhat.com',
          null,
          null,
          this.daysToMilliseconds(5),
          15,
          'r02'
        ],
        [
          'r02',
          'new google sheet export script',
          'yaniwang@redhat.com',
          null,
          new Date(2018, 0, 5),
          null,
          50,
          null
        ]
      ],
      columns: [
        { id: 'Task ID', type: 'string' },
        { id: 'Task Name', type: 'string' },
        { id: 'Resource ID ', type: 'string' },
        { id: 'Start Date', type: 'date' },
        { id: 'End Date', type: 'date' },
        { id: 'Duration', type: 'number' },
        { id: 'Percent Complete', type: 'number' },
        { id: 'Dependencies', type: 'string' }
      ]
    }
  }
  daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000
  }

  render() {
    return (
      <Chart
        chartType="Gantt"
        rows={this.state.rows}
        columns={this.state.columns}
        options={this.state.options}
        graph_id="ScatterChart"
        width="100%"
        height="400px"
        chartEvents={this.chartEvents}
      />
    )
  }
}
export default ExampleChart
