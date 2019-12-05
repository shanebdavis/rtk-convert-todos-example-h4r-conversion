import React from 'react'
import { Todo } from './Todo'
import { useFilter } from '../filters/filterSlice'
import { useTodos } from './todosSlice'

export const TodoList = () =>
  <ul>
    {useTodos()
      .filter(useFilter())
      .map(todo => (<Todo key={todo.id} {...todo} />))}
  </ul>
