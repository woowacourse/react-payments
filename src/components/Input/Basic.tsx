import styled, { css } from 'styled-components';

import { memo } from 'react';

const StyledInput = styled.input`
  background: #ecebf1;
  border: none;
  border-radius: 7px;
  color: #04c09e;
  font-size: 18px;
  height: 45px;

  ::placeholder {
    color: #737373;
  }

  ${({
    margin,
    textAlign,
    width,
  }: Pick<Props, 'margin' | 'textAlign' | 'width'>) => css`
    margin: ${margin?.t || '0'} ${margin?.r || '0'} ${margin?.b || '0'}
      ${margin?.l || '0'};
    text-align: ${textAlign};
    width: ${width};
  `}
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 12px;
  color: #525252;
  margin-bottom: 3px;
`;

type Props = {
  description?: string;
  margin?: {
    t?: string;
    r?: string;
    b?: string;
    l?: string;
  };
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'justify-all'
    | 'match-parent';
  width?: string;
  id?: string;
  type?: 'text' | 'number' | 'button' | 'date' | 'password' | 'month';
  value?: string;
  maxLength?: number;
  min?: string;
  placeholder?: string;
  onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownFunc?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

function Input({
  description,
  margin,
  textAlign = 'center',
  width = '343px',
  id,
  type = 'text',
  value,
  maxLength,
  min,
  placeholder,
  onChangeFunc,
  onKeyDownFunc,
}: Props) {
  return (
    <>
      {description && <StyledLabel htmlFor={id}>{description}</StyledLabel>}
      <StyledInput
        margin={margin}
        min={min}
        textAlign={textAlign}
        width={width}
        id={id}
        data-testid={id}
        type={type}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChangeFunc}
        onKeyDown={onKeyDownFunc}
      />
    </>
  );
}

export default memo(Input);
