import React, { useState } from 'react'
import { addTodo } from './todosSlice'

const AddTodo = () => {
  const [todoText, setTodoText] = useState('')

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!todoText.trim()) {
            return
          }
          addTodo(todoText)
          setTodoText('')
        }}
      >
        <input value={todoText} onChange={e => setTodoText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo