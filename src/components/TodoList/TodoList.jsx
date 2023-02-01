import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList-item', {
          'TodoList-item-completed': completed,
        })}
      >
        <input
          type="checkbox"
          className="TodoList-checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="TodoList-text">{text}</p>
        <button
          type="button"
          className="TodoList-btn"
          onClick={() => onDeleteTodo(id)}
        >
          удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
