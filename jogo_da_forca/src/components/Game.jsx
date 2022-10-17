import { useState, useRef } from "react";

import Style from "./Game.module.css";

export function Game({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}){

  const [letter, setLetter] = useState('')
  const letterInputRef = useRef(null)

  function handleSubmit(e){
    e.preventDefault()

    verifyLetter(letter)
    setLetter("")
  }

  return (
    <div className={Style.game}>
      <p className={Style.points}>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className={Style.tip}>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses > 1 ? `${guesses} tentativas` : `${guesses} tentativa`}</p>
      <div className={Style.wordContainer}>
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className={Style.letter}>{letter}</span> 
          ) : (
            <span key={i} className={Style.blankSquare}></span> 
          )
        ))}
      </div>
      <div className={Style.letterContainer}>
        <p>Tente adivinhar a letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="letter" 
            maxLength="1" 
            required 
            onChange={(e)=>setLetter(e.target.value)} 
            value={letter}
            ref={letterInputRef}  
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className={Style.wrongLettersContainer}>
        <p>Letras já utilizadas: </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
    </div>
  );
}