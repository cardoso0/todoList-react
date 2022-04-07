import React, { useState } from 'react';
import * as C from './AppStyled'
import { Form } from './components/Form/Form'
import { List } from './components/List/List'


function App() {
  const [itemsList, setItemsList] = useState([])

  const handleAddItemToList = (newItem) => {
    setItemsList([...itemsList, newItem])
  }

  return (
    <C.Main>
      <h1>todos</h1>
      
      <Form 
        onAddItem={handleAddItemToList}
        itemsList={itemsList}
        />

      <List 
        itemsList={itemsList}
        setItemsList={setItemsList}
      /> {/* passando o `itemList` como props para o componente */}
    </C.Main>
  )
}

export default App
