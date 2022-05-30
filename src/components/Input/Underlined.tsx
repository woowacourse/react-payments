import styled, { css } from 'styled-components';

import { memo } from 'react';

const StyledInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 18px;

  :focus {
    outline: none;
  }

  ${({
    margin,
    padding,
    textAlign,
    width,
  }: Pick<Props, 'margin' | 'padding' | 'textAlign' | 'width'>) => css`
    margin: ${margin?.t || '0'} ${margin?.r || '0'} ${margin?.b || '0'}
      ${margin?.l || '0'};
    padding: ${padding?.t || '0'} ${padding?.r || '0'} ${padding?.b || '0'}
      ${padding?.l || '0'};
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
  padding?: {
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
  type?: 'text' | 'number' | 'button' | 'date' | 'password' | 'month';
  value?: string;
  maxLength?: number;
  placeholder?: string;
  onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function UnderlinedInput({
  description,
  margin,
  padding,
  textAlign = 'center',
  width = '343px',
  type = 'text',
  value,
  maxLength,
  placeholder,
  onChangeFunc,
}: Props) {
  return (
    <>
      {description && <StyledLabel>{description}</StyledLabel>}
      <StyledInput
        margin={margin}
        padding={padding}
        textAlign={textAlign}
        width={width}
        type={type}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChangeFunc}
      />
    </>
  );
}

export default memo(UnderlinedInput);
