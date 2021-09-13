import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Button from "../Button";

test("Render Button correctly", () => {
  render(
    <Button content='Button Test' onClick={() => {}} buttonType='follow' />
  );

  const element = screen.getByText("Button Test");
  expect(element).toBeInTheDocument();
});

test("Capture Button clicks", (done) => {
  const handleClick = () => done();

  const { getByText } = render(
    <Button content='Click Me' onClick={handleClick} buttonType='follow' />
  );

  const element = getByText("Click Me");
  fireEvent.click(element);
});

afterEach(cleanup);
