import React, { Component } from 'react'

class Converter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      binary : "",
      decimal : ""
    }

    this.binaryChange = this.binaryChange.bind(this)
    this.decimalChange = this.decimalChange.bind(this)
  }

  binaryChange(event) {
    this.setState({
      binary : event.target.value
    }, () => {
      let {binary, decimal} = this.state
      let startingPower = Math.pow(2,binary.length-1)
      let binaryToDecimalAns = 0
      binary.split('').map(bin => {
        if(bin === "1")
          binaryToDecimalAns += startingPower
        startingPower /= 2
      })
      this.setState({
        decimal : binaryToDecimalAns
      })
    })
  }

  decimalChange(event) {
    this.setState({
      decimal : event.target.value
    }, () => {
      let {binary, decimal} = this.state
      let decimalToBinaryString = ""
      decimal = +decimal
      while(decimal > 0) {
        decimalToBinaryString += decimal % 2
        decimal = Math.floor(decimal/2)
      }
      decimalToBinaryString = decimalToBinaryString.split('').reverse().join('')
      this.setState({
        binary : decimalToBinaryString
      })
    })
  }

  render() {
      return(
      <div style={{width:"30%", margin: "0 auto"}} className="uk-card uk-card-body uk-card-default uk-position-center">
        <h1 className="uk-card-title">Converter</h1>
        <div className="uk-margin">
          <input className="uk-input" type="text" maxLength="25" value={this.state.binary} onChange={this.binaryChange} placeholder="Binary"/>
        </div>
        <div className="uk-margin">
          <input className="uk-input" type="text" maxLength="8" value={this.state.decimal} onChange={this.decimalChange} placeholder="Decimal"/>
        </div>

        <p className="uk-text-meta">by <a href="https://github.com/Marvin9" className="uk-text-success">mayursinh</a></p>
      </div>
    )
  }
}

export default Converter
