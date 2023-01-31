import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList-item">
        <p className="TodoList-text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
