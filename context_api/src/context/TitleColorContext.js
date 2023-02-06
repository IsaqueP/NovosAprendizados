import { createContext, useReducer } from 'react';

export const TitleColorContext = createContext()

export function titleColorReducer(state, action){

  switch(action.type){
    case "RED": 
      return { ...state, color: "red"}
    case "BLUE":
      return { ...state, color: "blue"}

    default:
      return state
  }

}


export function TitleColorContextProvider({children}){

  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple"})

  console.log(state)

  return(
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  )
}