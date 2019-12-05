import React from 'react'
import { toggleTodo } from './todosSlice'

const Todo = ({ id, text, completed }) =>
  <li
    onClick={() => toggleTodo(id)}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>

export default Todo
