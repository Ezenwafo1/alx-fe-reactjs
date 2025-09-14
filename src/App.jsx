<<<<<<< HEAD
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>My Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
=======
<<<<<<< HEAD
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div>
      <RegistrationForm />
    </div>
  );
}

export default App;
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import UserCard from './components/UserCard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
        <div className="bg-white p-8 rounded-xl w-full max-w-3xl text-gray-800 shadow-lg">
          <h1 className="text-4xl font-bold mb-6">GitHub User Search</h1>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/user/:username" element={<UserCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
>>>>>>> 07a04b4 (fixed erorr with packagejson)
>>>>>>> bcbdd9b5706d99818c7ef9d01862caa36be536b2
