import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos, onDelete }) => {
    let todosStyle = {
        minHeight:"44vh",
        margin:"50px auto"
    }
    return (
        <div className="container" style={todosStyle}>
            <hr/>
            <h3 className="my-3">Todos List</h3>
            {todos.length === 0 ? "No Todos to display" :
                    todos.map((todo) => {
                        return (<><TodoItem todo={todo} key={todo.sno} onDelete={onDelete} /> <hr/></>)
                    })
            }
        </div>
    )
}

export default Todos

