import React from "react";
import { StyledButton } from "./StyledButton";

interface ButtonProps {
  content: string;
  onClick: () => void;
}

const Button = ({ content, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick}>{content}</StyledButton>
);

export default Button;
