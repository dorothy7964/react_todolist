import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos } = this.props;

    const todoItemList = todos.map(
      (todo) => (
        <TodoItem
          {...todo}
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
