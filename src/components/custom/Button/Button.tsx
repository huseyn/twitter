import React from "react";
import Container from "./styles";

interface IButtonProps {
  content: string;
  styleType: "tweet" | "follow";
  onClick: () => void;
}

const Button = ({ content, ...props }: IButtonProps) => (
  <Container {...props}>{content}</Container>
);

export default Button;
