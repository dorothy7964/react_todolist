import React from 'react';
import './TodoItem.css';

const TodoItem = ({ id, text, checked, onToggle }) => {
  return (
    <div className="todoItem" onClick={() => {onToggle(id)}}>
      <div className="remove">&times;</div>

      <div className={`todo-text ${checked? 'checked' : ''}`}>{text}</div>

      {
        checked && <div className="check-mark">&#x2713;</div>
      }
    </div>
  )
}

export default TodoItem;
