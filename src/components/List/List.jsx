import * as S from './styled'

export const List = (props) => {

  return (
    <S.Ul>
      {props.itemsList.map((item, index) => (
        <li key={index}>
          <input type="checkbox" id="checkBox" />
          <span>{item}</span>
          <button type='button'>Delete</button>
        </li>
      ))}
    </S.Ul>
  )
}