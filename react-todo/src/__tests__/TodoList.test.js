import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test("can toggle a todo item", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);

    // Click to toggle
    fireEvent.click(todoItem);

    // Check if line-through applied
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo item", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/Delete/i)[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});

describe("AddTodoForm Component", () => {
  test("can add a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/New Todo Item/i)).toBeInTheDocument();
  });
});
