import React, { Component } from 'react';
import './App.css';
import List from './List';
import TodoForm from './TodoForm';
import Footer from './Footer';
class App extends Component {
  state = { todos: [], filter: 'All' };

  setFilter = (filter) => {
    this.setState({filter})
  }

  getUniqId = () => {
    // This is only a helper function for id's since no db
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  addItem = (name) => {
    const { todos } = this.state
    const todo = { name, id: this.getUniqId(), complete: false }
    this.setState({ todos: [todo, ...todos] });
  }

  handleClick = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map( todo => {
        if(todo.id === id){
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }

  visibleItems = () => {
    const { todos, filter } = this.state;
    switch(filter){
      case 'Active':
        return todos.filter( t => !t.complete )
      case 'Complete': 
        return todos.filter( t => t.complete ) 
      default: 
        return todos;
    }
  }

  render() {
    const { todos, filter } = this.state;
    return(
      <>
      <div className='master'>
        <List name="Todo List" items={this.visibleItems()} todoClick={this.handleClick} />
        <TodoForm addItem={this.addItem} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
      </>
    );
  }
}

export default App;