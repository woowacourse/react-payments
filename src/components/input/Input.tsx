import { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  designType?: 'basic' | 'underline';
  backgroundColor?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(function (
  { designType = 'basic', backgroundColor, ...props },
  ref,
) {
  return (
    <Style.Input ref={ref} className={designType} backgroundColor={backgroundColor} {...props} />
  );
});

const Style = {
  Input: styled.input<Props>`
    display: flex;
    align-items: center;

    width: ${(props) => (props.width ? `${props.width}` : '36px')};
    height: ${(props) => (props.height ? `${props.height}` : '45px')};

    padding: 0;
    border: 0;
    border-radius: 7px;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#ecebf1')};

    font-size: 15px;
    text-align: center;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #c6c6c6;
    }

    &.underline {
      border-radius: 0;
      border-bottom: 1px solid #737373;
      background-color: transparent;
    }
  `,
};
