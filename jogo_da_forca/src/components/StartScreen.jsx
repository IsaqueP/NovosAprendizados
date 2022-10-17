import Style from './StartScreen.module.css'


export function StartScreen({ startGame }) {
  return (
    <div className={Style.start}>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}
