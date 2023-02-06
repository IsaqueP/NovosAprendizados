//import { useContext } from 'react';
//import { CounterContext } from '../context/CounterContext';
import { useCounterContext } from '../hooks/useCounterContext';

export function About(){

  const { counter } = useCounterContext()
  
  return(
    <div>
      <h1>About</h1>
      <p>{counter}</p>
    </div>
  )
}