import React from 'react';

export const ToDos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
        ) : (
        <p>You have nothing left to do!</p>
        )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}