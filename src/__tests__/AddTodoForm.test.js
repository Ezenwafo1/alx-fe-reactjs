import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoForm from "../components/AddTodoForm";

test("adds a new todo when form is submitted", () => {
  const addTodo = jest.fn();
  render(<AddTodoForm addTodo={addTodo} />);

  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(addTodo).toHaveBeenCalledWith("New Task");
  expect(input.value).toBe(""); // input should clear after submission
});
