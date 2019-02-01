const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 = new Hangman('Car Parts', 2)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}
const startGame = async () => {
    // const puzzle = await getPuzzle('2')
    const puzzle = "Hope Springs"
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// const countryCode = "MX"
// getCountryDetails(countryCode).then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

// getLocation().then((location) => {
//     console.log(`I am currently in ${location.city}, ${location.region}, ${location.country}`)
//     return getCountryDetails(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })