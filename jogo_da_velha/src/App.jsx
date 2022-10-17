import { React, useState } from 'react'


function App() {

  //Jogo inicial
  const startGame = [
    ['','',''],
    ['','',''],
    ['','','']
  ]
  //state que será usados durante o jogo
  const [ game, setGame ] = useState([
    ['','',''],
    ['','',''],
    ['','','']
  ]) 
  const [ currentSymbol, setCurrentSymbol ] = useState('X')
  const [ playing, setPlaying ] = useState(true)

  
  const board = (game)=>{
    return(
      <div style={styles.board}>
          <div style={styles.boardRow}>
              <div style={styles.home} data-pos='00' onClick={(e)=> play(e)}>{game[0][0]}</div>
              <div style={styles.home} data-pos='01' onClick={(e)=> play(e)}>{game[0][1]}</div>
              <div style={styles.home} data-pos='02' onClick={(e)=> play(e)}>{game[0][2]}</div>
          </div>
          <div style={styles.boardRow}>
              <div style={styles.home} data-pos='10' onClick={(e)=> play(e)}>{game[1][0]}</div>
              <div style={styles.home} data-pos='11' onClick={(e)=> play(e)}>{game[1][1]}</div>
              <div style={styles.home} data-pos='12' onClick={(e)=> play(e)}>{game[1][2]}</div>
          </div>
          <div style={styles.boardRow}>
              <div style={styles.home} data-pos='20' onClick={(e)=> play(e)}>{game[2][0]}</div>
              <div style={styles.home} data-pos='21' onClick={(e)=> play(e)}>{game[2][1]}</div>
              <div style={styles.home} data-pos='22' onClick={(e)=> play(e)}>{game[2][2]}</div>
          </div>
      </div>
    )
  }


  const verifyVictory = ()=>{
      
    let points = 0
    let victory = false
    
    //verificar se houve vitoria nas linhas 
    for(let i=0; i<3; i++){
      points = 0

      for(let c=0; c<3; c++){
        if(game[i][c] == currentSymbol){
          points++
        }
      }

      if(points == 3){
        victory = true
        break
      }
    }

    //verificar se houve vitoria nas colunas
    for(let c=0; c<3; c++){
      points = 0
      for(let i=0; i<3; i++){
        if(game[i][c] == currentSymbol){
          points++
        }

      }

      if(points == 3){
        victory = true
        break
      }

      //verificar se houve vitoria nas diagonais
      points = 0
      for(let d=0; d<3; d++){
        if(game[d][d] == currentSymbol){
          points++                    
        }
      }
      if(points == 3){
        victory = true
      }

      points = 0
      let i = 0
      for(let c=2; c>=0; c--){
        if(game[i][c] == currentSymbol){
          points++
        }
        i++
      }

      if(points == 3){
        victory = true
      }
    }

    return victory

  }

  const switchPlayer = ()=>{
    currentSymbol == 'X' ? setCurrentSymbol('O') : setCurrentSymbol('X')
  }

  const returnPosition = (e)=>{
    const p = e.target.getAttribute('data-pos')
    const position = [parseInt(p.substring(0,1)), parseInt(p.substring(1,2))]
    return position
  }

  const verifyEmptySpace = (e)=>{
    if(game[returnPosition(e)[0]][returnPosition(e)[1]] == ''){
      return true
    }else{
      return false
    }
  }

  const restartGame = ()=>{
    setPlaying(true)
    setGame(startGame)
    setCurrentSymbol('X')
  }

  const checkIfAllSpacesAreEmpty = ()=>{
    let spaces = 9
    for(let l=0; l<3; l++){
      for(let c=0; c<3; c++){
        if(game[l][c] !== ''){
          spaces--
          console.log(spaces)
        }
      }
    }

    if(spaces == 0){
      return true
    }else{
      return false
    }
  }

  const play = (e)=>{
    if(playing){
      if(verifyEmptySpace(e)){
        game[returnPosition(e)[0]][returnPosition(e)[1]] = currentSymbol
        switchPlayer()

        if(verifyVictory()){
          switchPlayer()
          alert(`jogador ${currentSymbol} venceu!!`)
          setPlaying(false)
        }

        if(checkIfAllSpacesAreEmpty()){
          switchPlayer()
          alert('Empate')
          setPlaying(false)
        }
      
      }else{
        console.log('essa opção já está ocupada')        
      }
    }
  }

  const BtnRestartGame = ()=>{
    if(!playing){
      return <button onClick={()=> restartGame()} >Jogar novamente</button>
    }
  }


  
  //CSS
  const styles = {
    board: {
      display: 'flex',
      flexDirection: 'column'
    },

    boardRow: {
      display: 'flex',
      flexDirection: 'row'
    },

    home: {
      width: 100,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      cursor: 'pointer',
      fontSize: 60,
      border: '1px solid #000'
    }
  }



  return(
    <>
        <div>
            <p>Quem joga: {currentSymbol}</p>
        </div>
        <div>
            {board(game)}
        </div>
        <div>
           {BtnRestartGame()}
        </div>
    </>
)
}

export default App;




