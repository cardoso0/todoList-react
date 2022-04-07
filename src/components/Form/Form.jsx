import React, { useState } from 'react';
import * as S from './styled'

export const Form = ({ onAddItem }) => {

  const [task, setTask] = useState('')
  const [id, setId] = useState(0)

  const handleChangeInput = event => {
    let inputTask = event.target.value
    setTask(inputTask)
  }

  const handleAddItemToList = (event) => {
    event.preventDefault();
    
    if(task) {
      const newTask = {
        id: id,
        value: task
      }
      setId(id + 1)
      onAddItem(newTask)

      setTask('')
    }
  }

  // const removeTask = (id) => {
  //   console.log(id)
  // }

  return (
    <S.Form>
      <input 
        type="text" 
        name="text" 
        id="text" 
        className='input-text' 
        placeholder='Digite uma tarefa...'
        autoFocus
        autoComplete='off'
        onChange={handleChangeInput}
        value={task}
      />
      <button 
        type='submit' 
        onClick={handleAddItemToList} 
        className='input-submit'>Enviar</button>
    </S.Form>
  )
}