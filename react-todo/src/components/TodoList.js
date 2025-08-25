// src/components/TodoList.jsx
import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    const t = text.trim();
    if (!t) return;
    setTodos([...todos, { id: Date.now(), text: t, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((td) =>
        td.id === id ? { ...td, completed: !td.completed } : td
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((td) => td.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.todo;
          addTodo(input.value);
          input.value = "";
        }}
      >
        <input name="todo" placeholder="Add a new todo" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              data-testid={`todo-${todo.id}`}
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              aria-label={`delete-${todo.id}`}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
