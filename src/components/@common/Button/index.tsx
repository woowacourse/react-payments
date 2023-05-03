import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled: boolean;
}

function Button(props: Props) {
  return (
    <ButtonStyle type={props.type ?? "submit"} disabled={props.disabled}>
      {props.text}
    </ButtonStyle>
  );
}

export default Button;

const ButtonStyle = styled.button`
  width: 375px;
  height: 45px;

  border: none;
  border-radius: 7px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  background: #5ba4fc;

  color: white;

  &:disabled {
    background: var(--input-background);
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
