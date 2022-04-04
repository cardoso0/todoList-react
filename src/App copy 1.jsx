import React, { useState } from 'react';
import * as C from './AppStyled'
import { Form } from './components/Form/Form'
import { List } from './components/List/List'


function App() {
  const [itemsList, setItemsList] = useState([])

  const handleAddItemToList = (txt: string) => {
    setItemsList([...itemsList, txt])
  }

  return (
    <C.Main>
      <h1>todos</h1>
      
      <Form onAddItem={handleAddItemToList} />

      <List itemsList={itemsList} /> {/* passando o `itemList` como props para o componente */}
    </C.Main>
  )
}

export default App