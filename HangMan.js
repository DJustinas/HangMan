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
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
        `
    <button
     class="btn btn-lg btn-success m-2"
      id='\` + letter + \`' onClick="handleGuess('\` + letter + \`')">` + letter + `</button>
    `).join('')
    document.getElementById('keyboard').innerHTML = buttonsHTML
}



// function guessedWord() {
//     wordStatus = answer.split('').map(letter => guessed.indexOf(letter) >= 0 ? letter : " _ ").join('')
//
//     document.getElementById('wordSpotlight').innerHTML = wordStatus
// }
//
// document.getElementById('maxWrong').innerHTML = maxWrong
//
// function handleGuess(chosenLetter) {
//     guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null
//     document.getElementById(chosenLetter).setAttribute('disabled', true)
//
//     console.log('aaaaaa')
//
//     if(answer.indexOf(chosenLetter) >= 0) {
//         guessedWord()
//     }
// }



randomWord()
generateButtons()
// guessedWord()
// handleGuess()














