import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  border-bottom: ${(props) => (props.underLine ? '2px solid black;' : 'none')};
  text-align: center;
  font-size: 18px;
  width: ${(props) => props.width || '240px'};
  height: ${(props) => props.height || '22px'};
  padding-bottom: 3px;
`;

const Input = ({
  type,
  underLine,
  placeHolder = '입력해주세요.',
  width,
  height,
}) => {
  return (
    <StyledInput
      type={type}
      underLine={underLine}
      placeholder={placeHolder}
      width={`${width}px`}
      height={`${height}px`}
    ></StyledInput>
  );
};

export default Input;
