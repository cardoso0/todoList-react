import * as S from './styled'

export const List = (props) => {

  return (
    <S.Ul>
      {props.itemsList.map((item, index) => (
        <li key={index}>
          <input type="checkbox" id="checkBox" />
          {item}
          <button type='button'>Delete</button>
          <span></span>
        </li>
      ))}
    </S.Ul>
  )
}