import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";

test("renders login form", () => {
  render(<Login />);
  expect(screen.getByText(/sign in/i)).toBeInTheDocument();
});

test("shows error message on invalid email", async () => {
  render(<Login />);

  fireEvent.input(screen.getByLabelText(/email/i), {
    target: { value: "invalid-email" },
  });
  fireEvent.submit(screen.getByText(/sign in/i));

  expect(await screen.findByText(/invalid email address/i)).toBeInTheDocument();
});
