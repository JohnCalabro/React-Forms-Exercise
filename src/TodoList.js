
import React, { useState} from "react";
import Todo from "./Todo"
import TodoForm from "./TodoForm";



const TodoList = () => {
  const INITIAL_STATE = [
    {id: 1, task: 'finish assignment'},
    {id: 2, task: 'get ready for work'}
]
  const [todos, setTodos] = useState(INITIAL_STATE)
  const addTodo = (task) => {     //shorthand for {task:task}
    setTodos(todos => [...todos, {task}]) // adding this into new array
  }


  const deleteTodo = (task) => {
    setTodos(todos.filter(t => t.task !== task))
  }

  return (
    <div>
        <h3>Todo List</h3>
        <TodoForm addTodo={addTodo} />
        <div>
            {todos.map(todo => <Todo id={todo.id} task={todo.task} key={todo.id} deleteTodo={deleteTodo} />)}
        </div>
    </div>
  )
}

export default TodoList;