import React from "react";

export default function AddTodo({setTodos}) {
    const inputRef = React.useRef();

    function handleAddTodoSubmit(event) {
        event.preventDefault(); // prevent page from refreshing
        const todoText = event.target.elements.addTodo.value;
        const todo = {
            id: Math.random(),
            text: todoText,
            done: false
        };
        setTodos(e => {
            return e.concat(todo);
        });

        inputRef.current.value = "";
    }

    return (
        <form onSubmit={handleAddTodoSubmit}>
            <input name="addTodo" placeholder="Add todo" ref={inputRef}/>
            <button type="submit">Submit</button>
        </form>
    );
}