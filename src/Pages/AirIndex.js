import React, { Component } from "react"
import City from "../Components/AirIndexCity"

class AirIndex extends Component {
  render() {
    return (
      <div>
        <City city="beijing" />
        <City city="shanghai" />
        <City city="guangzhou" />
        <City city="chengdu" />
      </div>
    )
  }
}

export default AirIndex
