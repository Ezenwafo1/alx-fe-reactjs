// src/components/AddTodoForm.js
import React, { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: "0.5rem" }}>
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
