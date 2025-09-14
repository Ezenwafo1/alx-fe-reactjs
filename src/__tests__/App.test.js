import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders App with initial todos", () => {
  render(<App />);

  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build Todo App/i)).toBeInTheDocument();
});

test("can add a new todo through the form", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});
