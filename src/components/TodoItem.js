import React from 'react';
import './TodoItem.css';

const TodoItem = ({ id, text, checked, onToggle, onRemove }) => {
  return (
    <div className="todoItem" onClick={() => {onToggle(id)}}>
      <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>

      <div className={`todo-text ${checked? 'checked' : ''}`}>{text}</div>

      {
        checked && <div className="check-mark">&#x2713;</div>
      }
    </div>
  )
}

export default TodoItem;
