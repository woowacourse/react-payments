import React from 'react';
import { useEffect } from "react";
import useInput from "../hooks/useInput";

import styled from 'styled-components';

const Input = styled.input<{ hasError?: boolean }>`
  font-family: 'Inter', sans-serif;
  width: 100%;
  height: Fixed (32px) px;
  padding: 8px;
  gap: 8px;
  border-radius: 2px;
  border: ${(props) =>
    props.hasError ? 'solid 1px #ff3d3d' : 'solid 1px #acacac'};

  &:focus {
    outline: none;
    border: ${(props) =>
    props.hasError ? 'solid 1px #ff3d3d' : 'solid 1px #000000'};
  }

  &::placeholder {
    color: #acacac;
  }
`;

const PaymentsInputField = ({ maxLength = 50, ...props }: PaymentsInputFieldProps) => {
  const [value, setValue, hasError, errorMessage] = useInput(maxLength, props.inputType ?? 'text');

  useEffect(() => {
    if (props.changeErrorMessage) { props.changeErrorMessage(errorMessage) };
  }, [errorMessage])

  return (
    <Input
      placeholder={props.placeholder}
      hasError={hasError}
      value={value}
      onChange={setValue}
    />
  );
};

export default PaymentsInputField;
