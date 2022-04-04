import { useState } from 'react'
import * as S from './styled'

export const List = (props) => {
  const [check, setCheck] = useState()

  const handleCheckBox = event => {
    let checkedValue = event.target.checked
    setCheck(checkedValue)
  }

  return (
    <S.Ul>
      {props.itemsList.map((item, index) => (
        <li key={index}>
          <input type="checkbox" id="checkBox" onChange={handleCheckBox}/>
          <S.Span estilo={check}>{item}</S.Span>
          <button type='button'>Delete</button>
        </li>
      ))}
    </S.Ul>
  )
}