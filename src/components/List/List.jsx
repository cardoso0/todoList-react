import { useState } from 'react'
import * as S from './styled'

export const List = (props) => {
  const [check, setCheck] = useState()

  const handleCheckBox = event => {
    let checkedValue = event.target.checked
    setCheck(checkedValue)
  }

  const removeTask = (e) => {
    console.log(e.target)
  }

  return (
    <S.Ul>
      {props.itemsList.map((item, index) => (
        <li key={item.id}>
          <input type="checkbox" id="checkBox" onChange={handleCheckBox}/>
          <S.Span estilo={check}>{item.name}</S.Span>
          <button type='button' onClick={removeTask}>Delete</button>
        </li>
      ))}
    </S.Ul>
  )
}