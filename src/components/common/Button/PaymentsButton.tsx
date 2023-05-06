import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BankCode } from '../Card/types';

type Props = { bankCode?: BankCode } & ComponentPropsWithoutRef<'button'>;

export const PaymentsButton = (props: PropsWithChildren<Props>) => {
  return <Button {...props}>{props.children}</Button>;
};

const Button = styled.button<{ bankCode?: BankCode }>`
  padding: 8px;
  border: none;
  border-radius: 5px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  background-color: ${({ disabled, theme: { colors }, bankCode }) =>
    disabled || bankCode === undefined ? '#ececec' : colors.card.background[bankCode]};

  color: ${({ disabled, theme: { colors }, bankCode }) =>
    disabled || bankCode === undefined ? '#9e9e9e' : colors.card.font[bankCode]};

  transition: background-color 300ms;
  font-size: 14px;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    background-color: brightness(0.8);
  }
`;
