import React from "react";

interface ButtonProps {
  content: string;
}

const Button = ({ content }: ButtonProps) => <button>{content}</button>;

export default Button;
