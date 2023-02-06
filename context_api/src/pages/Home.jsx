//import { useContext } from 'react';
//import { CounterContext } from '../context/CounterContext';
import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

export function Home(){

  const { counter } = useCounterContext()

  const { color, dispatch } = useTitleColorContext()

  function setTitleColor(color){
    dispatch({ type: color })
  }

  return(
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>{counter}</p>

      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}