class Hangman {
    constructor(word, remainingGuesses){
        this.status = 'playing'
        this.guessedLetters = []
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
    }
    
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);
        if (isUnique) {
            this.guessedLetters.push((guess))
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
    }
    calculateStatus() {   
        const allGuessed = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        if (this.remainingGuesses <= 0 && !allGuessed) {
            this.status = 'failed'
        } else if (allGuessed) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage(){
        if(this.status ==='failed'){
            return `Nice try! The word was ${this.word.join('')}.`
        } else if (this.status === 'finished') {
            return 'Great work! You finished the word!'
        } else {
            return `Guesses left: ${this.remainingGuesses}`
        }
    }
}