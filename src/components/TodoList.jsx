import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, setTodos }) => {

    const handleComplete = ({ id }) => {
        setTodos(
            todos.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            {todos.map((todo) => {
                const classes = todo.completed ? "listCompleted" : "list"
                return (
                    <li className="list-item" key={todo.id}>
                        <input
                            value={todo.task}
                            className={classes}
                            type="text"
                        />
                        <button className="buttonBg" onClick={() => handleComplete(todo)} >
                            <Tooltip title="Complete" aria-label="complete">
                                <CheckCircleIcon color="primary" />
                            </Tooltip>
                        </button>
                        <button className="buttonBg" onClick={() => handleDelete(todo)}>
                            <Tooltip title="Delete" aria-label="delete">
                                <DeleteIcon />
                            </Tooltip>
                        </button>
                    </li>
                )
            })}
        </div>
    )
}

export default TodoList
