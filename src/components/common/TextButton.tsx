import React from "react";
import styled from "styled-components";

interface TextButtonProps {
  type?: "button";
  children: React.ReactNode;
  isVisible: boolean;
  hexColor: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = styled.button<Partial<TextButtonProps>>`
  visibility: ${(props) => (props.isVisible ? "viisble" : "hidden")};
  color: ${(props) => props.hexColor};
  font-size: 1rem;
  padding: 8px;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  &:hover {
    color: ${(props) => `${props.hexColor}90`};
  }
`;

function TextButton({
  children: text,
  isVisible,
  hexColor,
  ...rest
}: TextButtonProps) {
  return (
    <Button isVisible={isVisible} hexColor={hexColor} {...rest}>
      {text}
    </Button>
  );
}

export default TextButton;
