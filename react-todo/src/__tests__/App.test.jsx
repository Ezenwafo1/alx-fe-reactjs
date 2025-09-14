import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders My Todo App heading", () => {
  render(<App />);
  expect(screen.getByText("My Todo App")).toBeInTheDocument();
});

test("adds a new todo item", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/add a new task/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo item", () => {
  render(<App />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveClass("completed"); // depending on your styling
});
