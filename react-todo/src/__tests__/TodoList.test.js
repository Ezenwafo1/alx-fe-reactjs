import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList"; // ✅ Adjust path to where your TodoList.jsx actually is

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build Todo App/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add todo/i);
    const button = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText(/New Task/i)).toBeInTheDocument();
  });

  test("toggles a todo when clicked", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);

    // Initial state (not completed)
    expect(todoItem).toHaveStyle("text-decoration: none");

    fireEvent.click(todoItem);

    // After toggle (completed)
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo when delete button is clicked", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    const deleteButton = screen.getByTestId("delete-1"); // ✅ Ensure your component sets data-testid="delete-1"

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
