import React, { useState } from 'react';

export const TodoForm = ({ onSubmit }) => {
  const [todo, setTodo] = useState('');
  return (
    <form
      onSubmit={(e) => {
        onSubmit(e, todo);
        setTodo('');
      }}
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  );
};
