//CSS
import './App.css'

//React
import { useCallback, useEffect, useState } from 'react'

//Data
import { wordsList } from './data/words'

//Components
import { GameOver } from './components/GameOver';
import { Game } from './components/Game';
import { StartScreen } from './components/StartScreen';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0) 


  const pickWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
  
    return {word, category}
  }, [words])

  //starts game
  const startGame = useCallback(() => {
    //clear all letters
    clearLetterStates()
    
    //pick word and pick category
    const { word, category } = pickWordAndCategory()

    //create an array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((letter) => letter.toLowerCase())

    
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  //process the letter input
  function verifyLetter(letter){
    const normalizeLetter = letter.toLowerCase()    
  
    //check if letter has already been utilized
    if(guessedLetters.includes(normalizeLetter) || wrongLetters.includes(normalizeLetter)){
      return
    }

    //push guessed letter or remove a guess
    if(letters.includes(normalizeLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizeLetter
      ])
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizeLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }
  
  function clearLetterStates(){
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {

    if(guesses <= 0){
      //reset all states
      clearLetterStates()

      setGameStage(stages[2].name)
    }

  }, [guesses])

  useEffect(()=>{
    const uniqueLetters = [...new Set(letters)]

    //win condition 
    if(guessedLetters.length === uniqueLetters.length){
      //add score
      setScore((actualScore) => (actualScore += 100))

      //restart game with new word
      startGame()
    }

  }, [guessedLetters, letters, startGame]) 

  //restart game
  function retry(){
    setScore(0)
    setGuesses(guessesQty)

    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>

      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}

    </div>
  );
}

export default App;
