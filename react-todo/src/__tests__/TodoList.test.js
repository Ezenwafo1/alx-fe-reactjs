// src/__tests__/TodoApp.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "../components/TodoApp";

describe("TodoApp Component", () => {
  test("renders initial todos", () => {
    render(<TodoApp />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test("toggles a todo as completed", () => {
    render(<TodoApp />);
    const todoItem = screen.getByText(/Learn React/i);
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("completed"); // assumes completed adds a class
  });

  test("deletes a todo", () => {
    render(<TodoApp />);
    const todoItem = screen.getByText(/Build a Todo App/i);
    const deleteButton = screen.getByLabelText("delete-Build a Todo App");
    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(button);

    expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
  });
});
