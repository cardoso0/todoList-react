import React, { useState } from 'react';
import * as S from './styled'

export const Form = ({ onAddItem, itemsList }) => {

  const [task, setTask] = useState('')

  const handleChangeInput = event => {
    let inputTask = event.target.value
    setTask(inputTask)
  }

  const handleAddItemToList = (event) => {
    event.preventDefault();
    
    if(task) {
      const newTask = {
        id: itemsList.length + 1,
        value: task,
        done: false
      }
  
      onAddItem(newTask)

      setTask('')
    }
  }

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