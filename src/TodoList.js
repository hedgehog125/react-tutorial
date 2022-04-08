import React from "react";
import TodoItem from "./TodoItem";

export default function index({todos, toggleTodo}) {
    return (
       todos.map(item => (
           <TodoItem key={item.id} toggleTodo={toggleTodo} todo={item} />
       ))
    );
}