import React from "react";
import styled from "styled-components";
import { ERROR_MESSAGE } from "../../../constants/inputInfo";
import { useCheckLength } from "../../../hooks/useCheckLength";
import { getCustomElement } from "../../../utils/custumElement";

interface InputGroupProps {
  children: React.ReactElement | React.ReactElement[];
  asChild?: boolean;
}

export function InputGroup(props: InputGroupProps) {
  const { children, asChild = false } = props;
  const { error, checkInputLength } = useCheckLength();
  const customElement = getCustomElement(asChild, children, props);

  if (customElement) {
    return customElement;
  }

  return (
    <>
      <DefaultInputGroupStyle onBlur={checkInputLength}>
        {children}
      </DefaultInputGroupStyle>
      {error && <ErrorMessage>{ERROR_MESSAGE.COMMON}</ErrorMessage>}
    </>
  );
}

const DefaultInputGroupStyle = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  margin-top: 0.5rem;

  ${({ theme }) => theme.fonts.body}

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 7px;
`;

const ErrorMessage = styled.strong`
  ${({ theme }) => theme.fonts.label}
  color : ${({ theme }) => theme.colors.error}
`;
