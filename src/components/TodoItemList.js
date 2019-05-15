import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos } = this.props;

    const todoItemList = todos.map(
      ({ id, text, checked }) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          key={id}
        />
      )
    );

    return(
      <div>
        {todoItemList}
      </div>
    );
  }
}

export default TodoItemList;
