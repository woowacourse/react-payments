import React, { MouseEvent } from "react";
import styled from "styled-components";

interface AddCardButtonProps {
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

const Wrapper = styled.button`
  width: 249px;
  height: 169px;
  background: #e5e5e5;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const PlusWrapper = styled.svg`
  max-height: 36px;
  max-width: 36px;
  color: #575757;
`;

export default function AddCardButton({ onClick }: AddCardButtonProps) {
  return (
    <Wrapper onClick={onClick}>
      <PlusWrapper
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </PlusWrapper>
    </Wrapper>
  );
}
