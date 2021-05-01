import React from 'react';
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {

    const onSubmitForm = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: uuidv4(), task: input, completed: false }])
        setInput("");
    };

    return (
        <form onSubmit={onSubmitForm}>
            <input
                placeholder="Add a task..."
                type="text"
                className="task-input"
                value={input}
                required
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="button-add" type="submit">Add</button>
        </form>
    )
}

export default Form
