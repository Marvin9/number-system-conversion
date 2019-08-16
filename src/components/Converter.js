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
      <div style={{width:"50%", margin: "0 auto"}}>
        <label className="uk-label">Binary : </label>
        <input className="uk-input" type="text" maxLength="25" value={this.state.binary} onChange={this.binaryChange}/>
        <br /><br />
        <label className="uk-label">Decimal : </label>
        <input className="uk-input" type="text" maxLength="8" value={this.state.decimal} onChange={this.decimalChange}/>
      </div>
    )
  }
}

export default Converter
