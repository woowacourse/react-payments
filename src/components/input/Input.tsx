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
    height: ${(props) => (props.height ? `${props.height}` : '100%')};

    padding: 0;
    border: 0;
    border-radius: 7px;
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : 'var(--grey-200)'};

    font-size: 15px;
    text-align: center;

    :focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 4px var(--primary-color);
      background-color: var(--lighten-color);
    }

    ::placeholder {
      color: var(--grey-400);
    }

    &.underline {
      border-radius: 0;
      border-bottom: 1px solid var(--grey-300);
      background-color: transparent;

      :focus {
        box-shadow: 0 4px 4px -4px var(--primary-color);
      }
    }
  `,
};
