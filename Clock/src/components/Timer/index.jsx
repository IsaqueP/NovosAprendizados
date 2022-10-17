import {React, useState, useEffect} from 'react'

export function Timer(){
    //Recebendo as horas em formato string
    let hours = new Date().toLocaleTimeString()

    //criando o state para mudar na tela
    const [ hour, setHour ] = useState(hours)

    //usando o effect para receber o ultimo valor passado para a variável
    useEffect(()=>{
        const timer = setInterval(()=>{
            let hours = new Date().toLocaleTimeString()
            setHour(hours)
        }, 1000)
        return ()=> clearInterval(timer)
    }, [])
    
    return(
        <center>
         <h1>{hour}</h1>
        </center>
    
    )
}