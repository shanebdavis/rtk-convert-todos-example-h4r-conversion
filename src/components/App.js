import React from 'react'
import { Footer } from 'features/filters/Footer'
import { AddTodo } from 'features/todos/AddTodo'
import { TodoList } from 'features/todos/TodoList'

export const App = () =>
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>