import React from "react";
import { StyledButton } from "./StyledButton";

interface ButtonProps {
  content: string;
}

const Button = ({ content }: ButtonProps) => (
  <StyledButton>{content}</StyledButton>
);

export default Button;
