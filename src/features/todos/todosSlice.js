import { useRedux } from 'hooks-for-redux'

let nextTodoId = 0

export const [useTodos, { addTodo, toggleTodo }] = useRedux('todos', [], {
  addTodo: (todos, text) => [...todos, { text, id: nextTodoId++ }],
  toggleTodo: (todos, id) =>
    todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
})
