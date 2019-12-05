import React from 'react'
import Todo from './Todo'
import { useFilters } from '../filters/filtersSlice'
import { useTodos } from './todosSlice'

const TodoList = () =>
  <ul>
    {useTodos()
      .filter(useFilters())
      .map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
  </ul>

export default TodoList
