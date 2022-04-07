import React ,{ useState } from 'react'
import * as S from './styled'

export const List = ({ itemsList, setItemsList }) => {
  const [check, setCheck] = useState()

  const handleCheckBox = event => {
    let checkedValue = event.target.checked
    setCheck(checkedValue)
    console.log(check)
  }

  const handleRemoveTodo = todo => {
    let newTodos = [...itemsList]
    newTodos.splice(itemsList.indexOf(todo), 1)
    setItemsList(newTodos)
  }

  return (
    <S.Ul>
      {itemsList.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" id="checkBox" onChange={handleCheckBox} />
          <S.Span estilo={check}>{todo.value}</S.Span>
          <button type='button' onClick={() => handleRemoveTodo(todo)}>Delete</button>
        </li>
      ))}
    </S.Ul>
  )
}