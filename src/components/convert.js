export function binaryToDecimal(binary) {
    let startingPower = Math.pow(2,binary.length-1)
    let binaryToDecimalAns = 0

    binary.split('').map(bin => {
        if(bin === "1")
          binaryToDecimalAns += startingPower
        startingPower /= 2
    })

    return binaryToDecimalAns;
}

export function decimalToBinary(decimal) {
    let decimalToBinaryString = ""

    decimal = +decimal
    
    while(decimal > 0) {
      decimalToBinaryString += decimal % 2
      decimal = Math.floor(decimal/2)
    }

    return decimalToBinaryString.split('').reverse().join('')
}

export function octalToDecimal(octal) {
    let startingPower = Math.pow(8,octal.length-1)
    let octalToDecimalAns = 0

    octal.split('').map(oct => {
        octalToDecimalAns += (startingPower * oct)
        startingPower /= 8
    })

    return octalToDecimalAns;
}

export function octalToBinary(octal) {
    let decimal = octalToDecimal(octal);
    return decimalToBinary(decimal);
}

export function binaryToOctal(binary) {
    let binaryToDecimalAns = binaryToDecimal(binary)
    return decimalToOctal(binaryToDecimalAns)
}

export function decimalToOctal(decimal) {
    let decimalToOctalAns = ""
    decimal = +decimal
    while(decimal > 0) {
        decimalToOctalAns += decimal % 8
        decimal = Math.floor(decimal/8)
    }
    return decimalToOctalAns.split('').reverse().join('')
}