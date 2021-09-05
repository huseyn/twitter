import React from "react";
import { StyledButton } from "./StyledButton";

interface IButtonProps {
  content: string;
  styleType: "tweet" | "follow";
  onClick: () => void;
}

const Button = ({ content, ...props }: IButtonProps) => (
  <StyledButton {...props}>{content}</StyledButton>
);

export default Button;
