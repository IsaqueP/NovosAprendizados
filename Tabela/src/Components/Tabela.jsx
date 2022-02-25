import { React, useState } from 'react'

export function Tabela(props){


    const [ categoria, setCategoria ] = useState('')

    //Tabela com filmes
    const filmes = [
        {nome: '007', gênero: 'Ação', ano: '2010'},
        {nome: 'velozes e furiosos', gênero: 'Ação', ano: '2020'},
        {nome: 'meu primeiro amor', gênero: 'Romance', ano: '2000'},
        {nome: 'A branca de neve', gênero: 'Romance', ano: '2020'},
        {nome: 'Um lugar prometido para retornar', gênero: 'Drama', ano: '2000'},
        {nome: 'Star wars', gênero: 'Drama', ano: '2000'},
        {nome: 'Matrix', gênero: 'Suspense', ano: '1900'},
    ]

    //linhas com resultado da pesquisa
    const linhas = (cat)=>{
        //adicionar o resultado ao array
        const li = []
        
      
        //verificando cada valor
        filmes.forEach(
          (filme)=>{
            //se o valor foi do usuário for igual ao da tabela, irá adicionar no array

            if(props.value.toUpperCase() == 'nome'.toUpperCase() || cat.toUpperCase() == ''){
                if(filme.nome.toUpperCase() == cat.toUpperCase() || cat.toUpperCase() == ''){
                    //adicionando no array os valores  
                    li.push(
                      <tr>
                        <td>{filme.nome}</td>
                        <td>{filme.gênero}</td>
                        <td>{filme.ano}</td>
                      </tr>
                    )
                  }

            }else if(props.value.toUpperCase() == 'gênero'.toUpperCase() || cat.toUpperCase() == ''){
                if(filme.gênero.toUpperCase() == cat.toUpperCase() || cat.toUpperCase() == ''){
                    //adicionando no array os valores  
                    li.push(
                      <tr>
                        <td>{filme.nome}</td>
                        <td>{filme.gênero}</td>
                        <td>{filme.ano}</td>
                      </tr>
                    )
                  }

            }else if(props.value.toUpperCase() == 'ano'.toUpperCase() || cat.toUpperCase() == ''){
                if(filme.ano.toUpperCase() == cat.toUpperCase() || cat.toUpperCase() == ''){
                    //adicionando no array os valores  
                    li.push(
                      <tr>
                        <td>{filme.nome}</td>
                        <td>{filme.gênero}</td>
                        <td>{filme.ano}</td>
                      </tr>
                    )
                  }
            }

            
          }
        )
      
        //retornando os resultados
        return li
    }

    //tabela
    const TabelaFilme = (cat)=>{
        return(
          <table border='1'>
            <thead>
              <tr>
                <th>nome</th>
                <th>gênero</th>
                <th>ano</th>
              </tr>
            </thead>
            <tbody>
                {linhas(cat)}
            </tbody>
          </table>
        )
    }

    //função para pesquisar categoria/nome/ano
    const pesquisarCategoria = (cat, scat)=>{


        function text(){
            let texto = 'pesquise pelo '

            if(props.value == ''){
               return 'Escolha uma categoria'
            }else{
                return (
                    texto + props.value.toLowerCase()
                )
            }
        }

        return(
          <div>
            <label>{text()}</label>
            <input type="text" value={cat} onChange={(e)=> scat(e.target.value)} disabled={props.value == '' ? true : false} />
          </div>
        )
    }

    /*
        o CAT é a CATEGORIA (useState) que é passado para as funções para receber o valor pesquisado pelo usuário
    */

    return(
        <>
            {pesquisarCategoria(categoria, setCategoria)}
            <br />
            {TabelaFilme(categoria)} 
        </>
    )
}