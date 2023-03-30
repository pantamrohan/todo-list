import React, from 'react';
import { useState } from 'react/cjs/react.development';
import TaskForm from './TodoForm'

const Todolist = () => {

    const [todos, setTodos] = useState([]);


    const addTask = task {
        if (!task.text) {
            return
        }

        const newTodos = [task, ...todos];
        setTodos()
    }
    return ( <
        div >
        <
        TaskForm addTask = { addTask } > < /TaskForm> <
        /div>
    );
}

export default Todolist;