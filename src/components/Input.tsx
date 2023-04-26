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
  const inputRefs = Array(inputInfoList.length)
    .fill(0)
    .map(() => React.createRef<HTMLInputElement>());

  const moveFocus = (e: ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (
      e.target.value.length === e.target.maxLength &&
      Number(e.target.dataset.id) + 1 < inputRefs.length
    )
      inputRefs[Number(e.target.dataset.id) + 1].current?.focus();
  };

  return (
    <StyledInputWrapper>
      <StyledInputLabel>
        <StyledInputLabelContainer>
          <span>{labelText}</span>
          <div>{children}</div>
        </StyledInputLabelContainer>
        <StyledInputListWrapper>
          {inputInfoList.map(
            (
              { type, placeholder, minLength, maxLength, width, value, center, onChange },
              index,
            ) => {
              return (
                <StyledInput
                  key={index}
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
                  ref={inputRefs[index]}
                  onChange={(e) => {
                    moveFocus(e);
                    onChange(e);
                  }}
                />
              );
            },
          )}
        </StyledInputListWrapper>
      </StyledInputLabel>
    </StyledInputWrapper>
  );
};

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const StyledInputListWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;

const StyledInputLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Input;
