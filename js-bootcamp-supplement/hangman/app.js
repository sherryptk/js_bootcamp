const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(error)
})

const countryCode = "US"
getCountryDetails(countryCode).then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})

getLocation().then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})