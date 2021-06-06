import DeleteTodo from "./DeleteTodo";

export default function TodoList({todos, setTodos}) {
    function handleToggleTodo(todo) {
        const updatedTodos = todos.map((e) => 
            e.id === todo.id ? {
                ...e,
                done: !e.done,
            } : e
        );
        setTodos(updatedTodos);
    }

    if(todos.length === 0) {
        return <p>No Todos!</p>
    }
    
    return (
     <ul>
         {todos.map(todo => 
            <li key={todo.id} 
                style={{textDecoration: todo.done ? 'line-through' : null}}
                onDoubleClick={() => handleToggleTodo(todo)}
            >
                {todo.text}
                <DeleteTodo todo={todo} setTodos={setTodos} />
            </li>
         )}
     </ul>
    );
}