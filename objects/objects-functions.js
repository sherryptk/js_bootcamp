convertTemp = function (fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9
    const kelvin = (fahrenheit + 459.67) * 5 / 9

    return {
        fahrenheit: fahrenheit,
        celsius: celsius,
        kelvin: kelvin
    }
}

const temps = convertTemp(32)
const fahrenheit = temps.fahrenheit
const celsius = temps.celsius
const kelvin = temps.kelvin

console.log(`Fahrenheit = ${fahrenheit}, Celsius = ${celsius}, Kelvin = ${kelvin}`)