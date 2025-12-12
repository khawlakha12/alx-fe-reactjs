import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component Tests", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("add-btn");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const deleteButtons = screen.getAllByTestId("delete-btn");

    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
