import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle } = this.props;

    const todoItemList = todos.map(
      (todo) => (
        <TodoItem
          {...todo}
          onToggle={onToggle}
          key={todo.id}
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
