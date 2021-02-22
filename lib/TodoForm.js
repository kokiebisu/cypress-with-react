import React, { useState } from 'react';

export const TodoForm = ({ input, setInput, onSubmit }) => {
  const [todo, setTodo] = useState('');
  return (
    <form onSubmit={(e) => onSubmit(e, todo)}>
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
