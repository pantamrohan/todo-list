import React, { useState } from 'react';

export default function TodoForm(props) {
    //state
    const [input, setInput] = useState('');

    const handleSubmit = (e) {
        e.preventDefault();
        props.addTask

    }


    return ( < form >
        <
        input type = "text"
        placeholder = "Add a todo"
        value = { input }
        name = "text" / >
        <
        button type = "submit"
        onClick = { hadleSubmit }
        className = 'todo-btn' > ADD TODO < /button> <
        /form>);
    }