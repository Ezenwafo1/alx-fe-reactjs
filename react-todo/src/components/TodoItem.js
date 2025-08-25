// src/components/TodoItem.js
import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        marginBottom: "8px",
      }}
    >
      <span
        style={{ cursor: "pointer" }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ marginLeft: "1rem", color: "red" }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
