import React from "react";
import { IButtonProps } from "./types";
import Container from "./styles";

const Button = ({ content, ...props }: IButtonProps) => (
  <Container {...props}>{content}</Container>
);

export default Button;
