import React from "react";
import styled from "styled-components";

interface InformationButtonProps {
  onClick: () => void;
}

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bababa;
  border-radius: 50%;
  color: #969696;
  background-color: transparent;
  width: 27px;
  height: 27px;
  font-size: 20px;
  font-weight: 500;
`;
export default function InformationButton({ onClick }: InformationButtonProps) {
  return (
    <Wrapper type="button" onClick={onClick}>
      ﹖
    </Wrapper>
  );
}
