import React, { Component } from 'react'
import Error from './Error'

class Converter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      binary : "",
      decimal : "",
      invalidBinary : "",
      invalidDecimal : ""
    }

    this.binaryChange = this.binaryChange.bind(this)
    this.decimalChange = this.decimalChange.bind(this)
    this.removeAllError = this.removeAllError.bind(this)
  }

  removeAllError() {
    this.setState({
      invalidBinary : "",
      invalidDecimal : ""
    })
  }

  binaryValidated(expression) {
    let exp = /[^0|^1]+/
    return !exp.test(expression)
  }

  decimalValidated(expression) {
    let exp = /[^0-9]+/
    return !exp.test(expression)
  }

  binaryChange(event) {

    this.setState({
      binary : event.target.value
    }, () => {

      let {binary, decimal} = this.state

      if(!this.binaryValidated(binary)) {
        this.setState({
          binary : "",
          decimal : "",
          invalidBinary : "Invalid binary"
        })
        return;
      }

      let startingPower = Math.pow(2,binary.length-1)
      let binaryToDecimalAns = 0

      binary.split('').map(bin => {
        if(bin === "1")
          binaryToDecimalAns += startingPower
        startingPower /= 2
      })

      this.setState({
        decimal : binaryToDecimalAns,
        invalidBinary : ""
      })

    })

  }

  decimalChange(event) {

    this.setState({
      decimal : event.target.value
    }, () => {

      let {binary, decimal} = this.state

      if(!this.decimalValidated(decimal))
      {
        this.setState({
          decimal : "",
          binary : "",
          invalidDecimal : "Invalid Decimal"
        })
        return
      }

      let decimalToBinaryString = ""

      decimal = +decimal
      
      while(decimal > 0) {
        decimalToBinaryString += decimal % 2
        decimal = Math.floor(decimal/2)
      }

      decimalToBinaryString = decimalToBinaryString.split('').reverse().join('')
      
      this.setState({
        binary : decimalToBinaryString,
        invalidDecimal : ""
      })
    
    })
  }

  render() {
      return(
      <div style={{margin: "0 auto"}} className="uk-card uk-card-body uk-card-secondary uk-card-large uk-position-center">
        <h1 className="uk-card-title uk-text-bold">Converter</h1>
        <div className="uk-margin">
          <input className="uk-input uk-form-large" 
                 type="text" 
                 maxLength="25" 
                 value={this.state.binary} 
                 onKeyDown={this.binaryValidated} 
                 onChange={this.binaryChange} 
                 placeholder="Binary" 
                 onBlur={this.removeAllError}
          />
          {/* <div className="uk-text-meta uk-text-danger" style={{textAlign : "left"}}>{ this.state.invalidBinary }</div> */}
          <Error invalid={this.state.invalidBinary}/>
        </div>
        <div className="uk-margin">
          <input className="uk-input uk-form-large" 
                 type="text" 
                 maxLength="8" 
                 value={this.state.decimal} 
                 onChange={this.decimalChange} 
                 placeholder="Decimal" 
                 onBlur={this.removeAllError}
            />
          <Error invalid={this.state.invalidDecimal}/>
        </div>

        <p className="uk-text-meta">by <a href="https://github.com/Marvin9" className="uk-text-success">mayursinh</a></p>
      </div>
    )
  }
}

export default Converter
