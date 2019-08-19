import React, { Component } from 'react'
import Error from './Error'
import { binaryToDecimal, decimalToBinary, octalToDecimal, octalToBinary, binaryToOctal, decimalToOctal } from './convert'

class Converter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      binary : "",
      decimal : "",
      octal : "",
      invalidBinary : "",
      invalidDecimal : "",
      invalidoctal : ""
    }

    this.binaryChange = this.binaryChange.bind(this)
    this.decimalChange = this.decimalChange.bind(this)
    this.removeAllError = this.removeAllError.bind(this)
    this.octalChange = this.octalChange.bind(this)
  }

  removeAllError() {
    this.setState({
      invalidBinary : "",
      invalidDecimal : "",
      invalidoctal : ""
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

  octalValidated(expression) {
    let exp = /[\D|8|9]+/
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

      this.setState({
        decimal : binaryToDecimal(binary),
        octal : binaryToOctal(binary),
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

      this.setState({
        binary : decimalToBinary(decimal),
        octal : decimalToOctal(decimal),
        invalidDecimal : ""
      })
    
    })
  }


  octalChange(event) {
    this.setState({
      octal : event.target.value
    }, () => {
      let { octal } = this.state;

      if(!this.octalValidated(octal)) {
        this.setState({
          octal : "",
          invalidoctal : "Invalid octal"
        })
        return;
      }

      this.setState({
        binary : octalToBinary(octal),
        decimal : octalToDecimal(octal)
      })
    })
  }

  render() {
      return(
      <div style={{margin: "0 auto"}} className="uk-card uk-card-body uk-card-secondary uk-card-large uk-position-center">
        <h1 className="uk-card-title uk-text-bold">Converter</h1>
        <div className="uk-margin" style={{textAlign:"left"}}>
          <label>Binary : </label>
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
        <div className="uk-margin" style={{textAlign:"left"}}>
          <label>Decimal : </label>
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
        <div className="uk-margin" style={{textAlign : 'left'}}>
          <label>Octal : </label>
          <input className="uk-input uk-form-large" 
                 type="text" 
                 maxLength="8" 
                 value={this.state.octal} 
                 onChange={this.octalChange} 
                 placeholder="Octal" 
                 onBlur={this.removeAllError}
            />
          <Error invalid={this.state.invalidoctal}/>
        </div>
        <p className="uk-text-meta">by <a href="https://github.com/Marvin9" className="uk-text-success">mayursinh</a></p>
      </div>
    )
  }
}

export default Converter
