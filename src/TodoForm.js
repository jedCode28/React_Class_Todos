import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input required placeholder="Add an Item" />
      </form>
    )
  }
}
export default TodoForm;