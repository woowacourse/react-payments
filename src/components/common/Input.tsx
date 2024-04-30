import { forwardRef } from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ isError = false, ...rest }: InputProps, ref) => {
  return <S.Input $isError={isError} ref={ref} {...rest} />;
});

interface StyledInputProps {
  $isError: boolean;
}

const LIGHT_GREY = '#acacac';
const S = {
  Input: styled.input<StyledInputProps>`
    width: ${props => props.width};
    padding: 10px 7px;

    border: 1.2px solid ${props => (props.$isError ? '#ff3d3d' : LIGHT_GREY)};
    border-radius: 5px;
    font-size: 15px;

    &::placeholder {
      color: ${LIGHT_GREY};
    }

    &:focus {
      outline: none;
    }
  `,
};

export default Input;
