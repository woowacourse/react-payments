import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type InputInfo = {
  type: string;
  placeholder?: string;
  maxLength: number;
  width: string;
  value?: string;
  onChange: (e: ChangeEvent) => void;
};

type InputProps = {
  labelText: string;
  inputInfoList: InputInfo[];
};

const Input = ({ labelText, inputInfoList }: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInputLabel>
        {labelText}
        <div>
          {inputInfoList.map(({ type, placeholder, maxLength, width, value, onChange }, index) => {
            return (
              <StyledInput
                type={type}
                name={`${labelText}${index}`}
                maxLength={maxLength}
                width={width}
                placeholder={placeholder}
                data-id={index}
                value={value}
                onChange={onChange}
              />
            );
          })}
        </div>
      </StyledInputLabel>
    </StyledInputWrapper>
  );
};

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 18px;
  }
`;

const StyledInputLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 7px;
  color: #525252;
`;

const StyledInput = styled.input`
  width: ${(props) => props.width};
  height: 45px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #525252;

  & + & {
    margin-left: 8px;
  }
`;

export default Input;
