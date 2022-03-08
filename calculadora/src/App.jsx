import { React, useState } from 'react'

function App() {

  const [ screenValue, setScreenValue ] = useState('')
  const [ result, setResult ] = useState(0)
  const [ accumulator, setAccumulator ] = useState(0)
  const [ operated, setOperated ] = useState(false)
  const [ cont, setCont ] = useState(0)  //contar a quantidade de operadores digitados
  const [ contP, setContP ] = useState(0) //contar a quantidade de parenteses digitados

  //Components
  const Screen = (value, result)=>{
    return(
      <div style={CSS.Screen}>
        <span style={CSS.OperationScreen}>{value}</span>
        <span style={CSS.ResultScreen}>{result}</span>
      </div>
    )
  }

  const Btn = (label, onClick)=>{
    return(
      <button style={CSS.Btn} onClick={onClick}>{label}</button>
    )
  }

  //Functions
  const addDigitInScreen = (digit)=>{

    function addDigit(){
      const valueEnteredOnScreen = screenValue + digit
      setScreenValue(valueEnteredOnScreen)
    }

    //se for um número
    if(digit !== '+' && digit !== '-' && digit !== '*' && digit !== '/' && digit !== '.' && digit !== '(' && digit !== ')' ){

      //limpa a operação anterior, depois de ter um resultado
      if(operated){
        setScreenValue(digit)
        setOperated(false)
        return
      } 

      addDigit()
      setCont(0)
      setContP(0)
    
     
    }else if(cont == 0 && (digit == '+' || digit == '-' || digit == '*' || digit == '/' || digit == '.')){ //se for um operador

      //faz um cálculo com o resultado
      if(operated){
        setOperated(false)
        setScreenValue(result + digit)
        return
      } 

      addDigit()
      setCont(1)
      setContP(0)
    
    }else if(contP == 0 && (digit == '(' || digit == ')')){ //se for um parênteses
      addDigit()
      setCont(0)
      setContP(1)

    }else{
      console.log('não digite mais de um operador')
    }
  }

  //limpa a operação
  const clearMemory = ()=>{
    setOperated(false)
    setScreenValue('')
    setResult(0)
    setAccumulator(0)
    setCont(0)
    setContP(0)
    return
  }

  //operações
  const Operation = (operation)=>{

    //limpar 1 caractere
    if(operation == 'backSpace'){
      let vScreen = screenValue
      vScreen = vScreen.substring(0, (vScreen.length-1))
      setScreenValue(vScreen)
      setOperated(false)
      return
    }

    //calcular o resultado
    try {
      const result = eval(screenValue)
      setAccumulator(result)
      setResult(result)
      setOperated(true)

    } catch (error) {
        setResult('ERROR')
    }
  }

  //CSS
  const CSS = {
    Container: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      width: 300,
      border: '1px solid black',
    },

    Screen: {
      display: 'flex',
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#444',
      flexDirection: 'column',
      width: 260,
    },
  
    OperationScreen: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      fontSize: 25,
      color: '#fff',
      height: 20
    },
  
    ResultScreen: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      fontSize: 50,
      color: '#fff'
    },

    Btn: {
      fontSize: 30,
      height: 75,
      width: 75,
      padding: 20,
      backgroundColor: '#000',
      color: '#fff',
      borderColor: '#000',
      textAlign: 'center',
      outline: 'none'
    },

    Btns: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }


  return (
    <>
      <div style={CSS.Container}>
        {Screen(screenValue, result)}
        <div style={CSS.Btns}>
          {Btn('AC', clearMemory)}
          {Btn('(', ()=>addDigitInScreen('('))}
          {Btn(')', ()=>addDigitInScreen(')'))}
          {Btn('/', ()=>addDigitInScreen('/'))}
          {Btn('7', ()=>addDigitInScreen('7'))}
          {Btn('8', ()=>addDigitInScreen('8'))}
          {Btn('9', ()=>addDigitInScreen('9'))}
          {Btn('*', ()=>addDigitInScreen('*'))}
          {Btn('4', ()=>addDigitInScreen('4'))}
          {Btn('5', ()=>addDigitInScreen('5'))}
          {Btn('6', ()=>addDigitInScreen('6'))}
          {Btn('-', ()=>addDigitInScreen('-'))}
          {Btn('1', ()=>addDigitInScreen('1'))}
          {Btn('2', ()=>addDigitInScreen('2'))}
          {Btn('3', ()=>addDigitInScreen('3'))}
          {Btn('+', ()=>addDigitInScreen('+'))}
          {Btn('0', ()=>addDigitInScreen('0'))}
          {Btn('.', ()=>addDigitInScreen('.'))}
          {Btn('<-', ()=>Operation('backSpace'))}
          {Btn('=', ()=>Operation('='))}
        </div>
      </div>
      
    </>
  );
}

export default App;
