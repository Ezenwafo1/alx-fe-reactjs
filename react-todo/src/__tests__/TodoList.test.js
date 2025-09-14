import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  const mockTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: true },
  ];

  const toggleTodo = jest.fn();
  const deleteTodo = jest.fn();

  test("renders initial todos", () => {
    render(
      <TodoList todos={mockTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    );

    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build Todo App/i)).toBeInTheDocument();
  });

  test("toggles a todo when clicked", () => {
    render(
      <TodoList todos={mockTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    );

    const todoItem = screen.getByText(/Learn React/i);

    // Initial state (not completed)
    expect(todoItem).toHaveStyle("text-decoration: none");

    fireEvent.click(todoItem);

    expect(toggleTodo).toHaveBeenCalledWith(1);
  });

  test("deletes a todo when delete button is clicked", () => {
    render(
      <TodoList todos={mockTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    );

    const deleteButton = screen.getByTestId("delete-1");
    fireEvent.click(deleteButton);

    expect(deleteTodo).toHaveBeenCalledWith(1);
  });
});
