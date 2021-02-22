import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { Footer } from './Footer';

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = (e, value) => {
    e.preventDefault();
    console.log('en', e, value);

    const newArray = [...todos];
    newArray.push(value);
    setTodos(newArray);
  };

  const onRemove = (e, index) => {
    console.log('e,', e, index);
    e.preventDefault();
    const newArray = [
      ...todos.splice(0, index),
      ...todos.splice(index + 1, todos.length - 1),
    ];
    setTodos(newArray);
  };

  console.log('dod', todos);

  return (
    <Router>
      <div>
        <header className="header">
          <h1>todos</h1>
          <TodoForm todos={todos} setTodos={setTodos} onSubmit={onSubmit} />
        </header>
        <section className="main">
          <TodoList todos={todos} onRemove={onRemove} />
        </section>
        <Footer />
      </div>
    </Router>
  );
};
