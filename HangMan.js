let country_names = [
    "finland",
    "norway",
    "england",
    "latvia",
    "estonia",
    "russian",
    "france",
    "germany",
    "netherlands",
    "switzerland",
    "poland",
    "greece",
    'belgium'
]

let answer = ''
let maxWrong = 6
let mistakes = 0
let guessed = []
let wordStatus = null


function randomWord() {
    answer = country_names[Math.floor(Math.random() * country_names.length)]
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;


}






function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null
    document.getElementById(chosenLetter).setAttribute('disabled', true)

    alert(answer)
    if(answer.indexOf(chosenLetter) >= 0) {
        guessedWord()
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++
        updateMistakes()
    }
}









function guessedWord() {
    wordStatus = answer.split('').map(letter => guessed.indexOf(letter) >= 0 ? letter : " _ ").join('')

    document.getElementById('wordSpotlight').innerHTML = wordStatus
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes
}


document.getElementById('maxWrong').innerHTML = maxWrong











randomWord()
generateButtons()
guessedWord()
handleGuess()














