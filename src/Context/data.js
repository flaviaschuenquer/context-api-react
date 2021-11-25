import React, { useState } from 'react'

const estadoInicial = {
  nome: 'Flávia',
  sobrenome: 'Schuenquer'
}

export const DataContext = React.createContext(null)

function Contexto(props) {
  const [state, setState] = useState(estadoInicial)
  console.log(state)
  function handleSetState(key, value) {
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <DataContext.Provider value={{ state, handleSetState }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default Contexto
