import React, { useState, useEffect } from 'react'
import Form from './Form'
import "./style.css"
import TodoList from './TodoList'

const Home = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState(initialState)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="header">
                    <h1>Todo List (by Suraj)</h1>
                </div>
                <div>
                    <Form
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                    />
                </div>
                <div>
                    <TodoList
                        todos={todos}
                        setTodos={setTodos}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
