import React, {
    useState,
    useRef,
    useEffect
} from "react";
import "./App.css";
import TodoList from "./TodoList";

const STORAGE_KEY = "TodoItems";

const App = _ => {
    const [todos, setTodos] = useState(_ => {
        const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (storedTodos) return storedTodos;
        return [];
    });
    const todoRef = useRef();

    useEffect(_ => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = e => {
        const name = todoRef.current.value;
        if (name == "") return;
        
        setTodos(todos => [...todos, {
            id: todos.length,
            name: name,
            complete: false
        }]);
        todoRef.current.value = "";
    };
    const toggleTodo = id => {
        const newTodos = [...todos];
        const item = newTodos.find(item => item.id == id);
        item.complete = ! item.complete;

        setTodos(newTodos);
    };
    const deleteCompleted = e => {
        setTodos(todos.filter(item => ! item.complete));
    };

	return (
		<>
			<TodoList todos={todos} toggleTodo={toggleTodo}/>
            <input ref={todoRef} type="text" />
            <button onClick={addTodo}>Add new</button> <br></br>
            <button onClick={deleteCompleted}>Delete completed</button>

            <div>{todos.filter(item => ! item.complete).length} items left</div>
		</>
	);
}

export default App;
