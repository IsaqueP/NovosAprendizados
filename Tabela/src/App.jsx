import { React, useState } from 'react'
import { Tabela } from './Components/Tabela'

export default function App() {

  const [ teste, setTeste ] = useState('')

  return (
    <>
      <p>Pesquisar pelo
        <button onClick={()=>setTeste('Nome')} value='Nome'>Nome</button>
        <button onClick={()=>setTeste('Gênero')} value=''>Gênero</button>
        <button onClick={()=>setTeste('Ano')} value=''>Ano</button>
      </p>
      
      <Tabela value={teste} />
    </>
  );
}
