import React, { useState } from 'react';
import * as S from './AppStyled'
import { Form } from './components/Form/Form'
import { List } from './components/List/List'


function App() {
  const [itemsList, setItemsList] = useState([])

  const handleAddItemToList = (newItem) => {
    setItemsList([...itemsList, newItem])
  }

  return (
    <S.Main>
      <h1>todos</h1>
      
      <Form 
        onAddItem={handleAddItemToList}
        itemsList={itemsList}
        />

      <List 
        itemsList={itemsList}
        setItemsList={setItemsList}
      /> {/* passando o `itemList` como props para o componente */}
    </S.Main>
  )
}

export default App
