import styled from 'styled-components';
import { InputWrapper } from './InputWrapper';

export function CardNumberInput() {
  return (
    <InputWrapper width={318}>
      <Style.Input minLength={4} maxLength={4} required />
      &nbsp;-&nbsp;
      <Style.Input minLength={4} maxLength={4} required />
      &nbsp;-&nbsp;
      <Style.Input minLength={4} maxLength={4} type="password" required />
      &nbsp;-&nbsp;
      <Style.Input minLength={4} maxLength={4} type="password" required />
    </InputWrapper>
  );
}

export function validater(input: string) {
  return !/[^0-9]/.test(input);
}

const Style = {
  Input: styled.input`
    width: 36px;
    height: 14px;

    display: flex;
    align-items: center;

    border: 0;
    background-color: #ecebf1;
    font-size: 16px;
    padding: 0;
    text-align: center;

    :focus {
      outline: none;
    }
  `,
};
