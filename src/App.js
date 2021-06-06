import React from "react";
import "./App.css";
import "./TodoList";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export default function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, text: "Task 1", done: false},
    {id: 2, text: "Task 2", done: false},
    {id: 3, text: "Task 3", done: false},
  ]);

  return (
    <div className="App">
      <h1>Todo List</h1>

      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos}/>
    </div>
  );
}
