import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <div className="todoItem">
      <div className="remove">&times;</div>

      <div className="todo-text checked">글</div>

      <div className="check-mark">&#x2713;</div>
    </div>
  )
}

export default TodoItem;
