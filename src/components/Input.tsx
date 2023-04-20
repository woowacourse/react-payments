import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type InputInfo = {
  type: string;
  placeholder?: string;
  minLength: number;
  maxLength: number;
  width: string;
  value?: string;
  center: boolean;
  onChange: (e: ChangeEvent) => void;
};

type InputProps = {
  labelText: string;
  inputInfoList: InputInfo[];
  children?: React.ReactNode;
};

const Input = ({ labelText, inputInfoList, children }: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInputLabel>
        <StyledInputLabelContainer>
          <span>{labelText}</span>
          <div>{children}</div>
        </StyledInputLabelContainer>
        <div>
          {inputInfoList.map(
            (
              { type, placeholder, minLength, maxLength, width, value, center, onChange },
              index,
            ) => {
              return (
                <StyledInput
                  pattern={`.{${minLength},}`}
                  required={minLength !== 0}
                  type={type === 'number' ? 'text' : type}
                  name={`${labelText}${index}`}
                  maxLength={maxLength}
                  width={width}
                  placeholder={placeholder}
                  data-id={index}
                  value={value}
                  data-center={center}
                  onChange={onChange}
                />
              );
            },
          )}
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
  padding: 12px;
  &[data-center='true'] {
    text-align: center;
  }
  & + & {
    margin-left: 8px;
  }
`;

const StyledInputLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Input;
