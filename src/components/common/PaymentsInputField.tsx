import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

const Input = styled.input<{ hasError?: boolean, width?: number }>`
  font-family: 'Inter', sans-serif;
  width: ${(props) => props.width ? `${props.width}px` : '100%'};
  padding: 8px;
  border-radius: 2px;
  border: ${(props) =>
    props.hasError ? 'solid 1px #ff3d3d' : 'solid 1px #acacac'
  };

  &:focus {
  outline: none;
  border: ${(props) =>
    props.hasError ? 'solid 1px #ff3d3d' : 'solid 1px #000000'
  };
}

  &::placeholder {
  color: #acacac;
}
`;

const PaymentsInputField = ({ ...props }: PaymentsInputFieldProps) => {
  const { placeholder, maxLength, value, hasError, handleValueChange, handleOnBlur, handleOnFocus, className, width } = props

  return (
    <Input
      className={className}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      maxLength={maxLength}
      placeholder={placeholder}
      hasError={hasError}
      value={value}
      onChange={handleValueChange}
      width={width}
    />
  );
};

export default PaymentsInputField;
