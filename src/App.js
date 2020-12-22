import React, { Component } from 'react';
import { ToDos } from './Todos';
import AddItem from './AddItem';

class App extends Component {
  state= {
    todos: [
      { id: 1, content: "Study"},
      { id: 2, content: "Clean"},
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todoes => {
      return todoes.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  
  render () {
    return (
      <div className="todo-app container">
        <h1 className="center blue-test">My To Do List</h1>
        <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddItem addTodo={this.addTodo}/>
      </div>
    )
  }

  
}

export default App;
