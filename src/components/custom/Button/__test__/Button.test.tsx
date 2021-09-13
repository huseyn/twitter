import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("Render Button correctly", () => {
  render(
    <Button content='Button Test' onClick={() => {}} buttonType='follow' />
  );

  const element = screen.getByText("Button Test");
  expect(element).toBeInTheDocument();
});
