//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext';
import { ChangeCounter } from '../components/ChangeCounter';
import { useCounterContext } from '../hooks/useCounterContext';

export function Catalog(){
  const { counter } = useCounterContext()

  return(
    <div>
      <h1>Catalog</h1>
      <p>{counter}</p>
      <ChangeCounter />
    </div>  
  )
}