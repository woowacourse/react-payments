import styled from 'styled-components';
import { CardNumberInput } from './input/CardNumberInput';
import { ExpirationDateInput } from './input/ExpirationDateInput';
import { OwnerNameInput } from './input/OwnerNameInput';
import { SecurityCodeInput } from './input/SecurityCodeInput';
import { PasswordInput } from './input/PasswordInput';

export const AddNewCardForm = () => {
  return (
    <Style.Wrapper>
      <CardNumberInput />
      <ExpirationDateInput />
      <OwnerNameInput />
      <SecurityCodeInput />
      <PasswordInput />
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;

    gap: 19px;
  `,
};
