import React from "react";

export default function TodoItem({todo, toggleTodo}) {
    const todoClick = _ => {
        toggleTodo(todo.id);
    };

    return (
        <div>
            {todo.name}
            <input type="checkbox" checked={todo.complete} onChange={todoClick} />
        </div>
    );
}
