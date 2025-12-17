import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'





function TodoList() {
  const { todos, showOnlyFavories } = useSelector((store: RootState) => store.todo)


  const visibleTodos = showOnlyFavories
    ? todos.filter(todo => todo.favory)
    : todos

  return (
    <div>
      {
        visibleTodos && visibleTodos.map((todo) => (
          <Todo key={todo.id} todoProps={todo} />
        ))
      }

    </div>
  )
}

export default TodoList
