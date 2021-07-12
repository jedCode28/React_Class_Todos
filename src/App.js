import React, { Component } from 'react';
import List from './List';
import TodoForm from './TodoForm';
class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn Rails", complete: true },
      { id: 2, name: "Learn React", complete: false },
      { id: 3, name: "Get Job", complete: false },
    ]
  };

  render() {
    const { todos } = this.state;
    return(
      <div>
        <TodoForm />
      <List name="Todo List" items={todos} />
      </div>
    );
  }
}

export default App;