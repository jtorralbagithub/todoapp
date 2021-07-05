import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: name, // TODO: generate true unique ids
        name: name,
        complete: false,
      }];
    });
    todoNameRef.current.value = null;
  }

  function toggleTodo(id) {
    debugger;
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    debugger;
    setTodos(newTodos);
  }

  return (
    <>
      <div></div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>Number of Todos Remaing: {todos.filter(todo => !todo.complete).length}</div>
    </>
  );
}