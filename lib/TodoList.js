import React from 'react';

export const TodoList = ({ onRemove, todos }) => (
  <ul className="todo-list">
    {todos.map((todo, index) => (
      <li key={index}>
        <div className="view">
          <input className="toggle" type="checkbox" value={todo.isComplete} />
          <label>{todo.name}</label>
          <button className="destroy" onClick={(e) => onRemove(e, todo.id)} />
        </div>
      </li>
    ))}
  </ul>
);
