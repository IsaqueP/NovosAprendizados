import { React, useState } from 'react'


const tabelaIMC = (resultado)=>{

    function allBlack(){
        document.querySelector('.abaixo').style.color = 'black'
        document.querySelector('.normal').style.color = 'black'
        document.querySelector('.sobrepeso').style.color = 'black'
        document.querySelector('.grau1').style.color = 'black'
        document.querySelector('.grau3').style.color = 'black'
        document.querySelector('.grau2').style.color = 'black'
    }

    if(resultado > 0 && resultado < 18.5){
        allBlack()
        document.querySelector('.abaixo').style.color = 'tomato'
    
    }else if(resultado > 0 && resultado < 24.9){
        allBlack()
        document.querySelector('.normal').style.color = 'tomato'
    
    }else if(resultado > 0 && resultado < 29.9){
        allBlack()
        document.querySelector('.sobrepeso').style.color = 'tomato'
    
    }else if(resultado > 0 && resultado < 34.9){
        allBlack()
        document.querySelector('.grau1').style.color = 'tomato'
    
    }else if(resultado > 0 && resultado < 39.9){
        allBlack()
        document.querySelector('.grau2').style.color = 'tomato'
    
    }else if(resultado > 0 && resultado > 40){
        allBlack()
        document.querySelector('.grau3').style.color = 'tomato'
    
    }


    return(
        <table border='1' style={{borderCollapse:'colapse'}}>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr className='peso abaixo'>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo de 18,5</td>
                </tr>
                <tr className='peso normal'>
                    <td>Peso Normal</td>
                    <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr className='peso sobrepeso'>
                    <td>Sobrepeso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr className='peso grau1'>
                    <td>Obesidade Grau I</td>
                    <td>Entre 30 e 34,9</td>
                </tr>
                <tr className='peso grau2'>
                    <td>Obesidade Grau II</td>
                    <td>Entre 35 e 39,9</td>
                </tr>
                <tr className='peso grau3'>
                    <td>Obesidade Grau III</td>
                    <td>Maior que 40</td>
                </tr>
            </tbody>
        </table>
    )
}

const formPeso = (peso, statePeso)=>{
    return(
        <div>
            <label>
                Peso
                <input type="text" value={peso} onChange={(e)=>{statePeso(e.target.value)}} />
            </label>
        </div>
    )
}

const formAltura = (altura, stateAltura)=>{
    return(
        <div>
            <label>
                Altura
                <input type="text" value={altura} onChange={(e)=>{stateAltura(e.target.value)}} />
            </label>
        </div>
    )
}

const calcular = (peso, altura, setResultado)=>{

    const calc = ()=>{
        setResultado(peso/(altura*altura))
    }

    return(
        <div>
            <button onClick={calc}>Calcular</button>
        </div>
    )
}

const mostrarResultado = (resultado)=>{

    return(
        <div>
            <p>{resultado > 0 ? (`resultado: ${resultado.toFixed(2)}`) : 'digite um valor'}</p>
        </div>
    )
}   


function App() {
  
  const [ peso, setPeso ] = useState(0)
  const [ altura, setAltura ] = useState(0)
  const [ resultado, setResultado ] = useState(0)
  
  return (
    <>
      <h1>Calculadora de imc</h1>

      { formPeso(peso, setPeso) }
      { formAltura(altura, setAltura) }
      { calcular(peso, altura, setResultado) }
      { mostrarResultado(resultado) }

      { tabelaIMC(resultado) }
    </>
  );
}

export default App;
