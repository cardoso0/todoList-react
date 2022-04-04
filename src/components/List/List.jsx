
export const List = (props) => {

  return (
    <ul>
      {props.itemsList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}