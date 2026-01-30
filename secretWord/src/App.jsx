import './App.css'

import { useState } from 'react'

import { wordsList } from './data/words';

import { StartScreen } from './components/StartScreen'
import { GameOver } from './components/GameOver';
import { Game } from './components/Game';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

let totalNumberOfGuesses = 4
let guessesRemaining = totalNumberOfGuesses

let listOfGuessedLetters = []


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState([guessesRemaining])
  const [score, setScore] = useState(0)


  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  const pickWordAndCategory = () => {

    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random()*Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random()*words[category].length)]
  
    return{word, category}
  }

  const startGame = () => {
    //resets
    guessesRemaining = totalNumberOfGuesses 
    setGuesses(guessesRemaining) 
    listOfGuessedLetters = [] 
    clearLetterStates()
    
    const {word, category} = pickWordAndCategory()

    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  const winCondition = () => {

    const uniqueLetters = [... new Set(letters)]

    if(listOfGuessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => (actualScore += 100))
      startGame()
    }
  }

  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase()

    if(listOfGuessedLetters.includes(normalizedLetter) || listOfGuessedLetters.includes(normalizedLetter)){
      return
    }

    if(letters.includes(normalizedLetter)){
      listOfGuessedLetters = [...listOfGuessedLetters, normalizedLetter]
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])

      winCondition()
    }else{

      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
      
      guessesRemaining -= 1
    
      if(guessesRemaining <= 0){
        clearLetterStates()
        setGameStage(stages[2].name)
      }else{
        setGuesses(guessesRemaining)
      }
    }
  }

  const retry = () => {
    setScore(0)
    setGuesses(totalNumberOfGuesses)
    setGameStage(stages[0].name)
    guessesRemaining = totalNumberOfGuesses
    listOfGuessedLetters = []
  }
  
  return (
    <div className='App'>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}  />}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
      
  )
}

export default App