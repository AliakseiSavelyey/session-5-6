import React from 'react';
import './Todo.scss';

const Todo = ({ text, onToggleCompleted, onDeleteTodo, completed }) => (
  <>
    <input
      type="checkbox"
      className="TodoList-checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList-text">{text}</p>
    <button type="button" className="TodoList-btn" onClick={onDeleteTodo}>
      удалить
    </button>
  </>
);

export default Todo;
