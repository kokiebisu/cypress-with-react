import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { Footer } from './Footer';
import axios from 'axios';

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = async (e, value) => {
    e.preventDefault();
    const newArray = [...todos];
    newArray.push();
    await axios.post('http://localhost:3000/todos', {
      name: value,
      isComplete: false,
    });
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        name: value,
        isComplete: false,
      },
    ]);
  };

  const onRemove = async (e, id) => {
    e.preventDefault();
    const response = await axios.delete(`http://localhost:3000/todos/${id}`);
    console.log('re', response);
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:3000/todos');
        console.log('response', response.data);
        setTodos(response.data);
      } catch (err) {
        console.log('err', err);
      }
    };
    fetch();
  }, []);

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
