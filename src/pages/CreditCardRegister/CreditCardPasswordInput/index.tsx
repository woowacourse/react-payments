import { useContext } from 'react';

import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import InputLayout from '@Components/InputLayout';

import * as CommonStyle from '@Styles/common';

import {
  CreditCardRegisterContext,
  CreditCardRegisterUpdateContext,
} from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import { CREDIT_CARD_LENGTH } from '@Constants/creditCard';

import * as S from './style';

function CreditCardPasswordInput() {
  const {
    creditCard: { password },
    errorMessage: { password: errorMessage },
  } = useContext(CreditCardRegisterContext);
  const {
    update: { password: update },
  } = useContext(CreditCardRegisterUpdateContext);

  const handleChangeCreditCardFirstPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    update.first(event.target.value);
  };

  const handleChangeCreditCardSecondPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    update.second(event.target.value);
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <InputLabel label="카드 비밀번호" />
      <CommonStyle.FlexBox justifyContent="flex-start">
        <Input
          type="password"
          value={password?.first}
          width="48px"
          textAlign="center"
          onChange={handleChangeCreditCardFirstPassword}
          maxLength={CREDIT_CARD_LENGTH.password}
        />
        <Input
          type="password"
          value={password?.second}
          width="48px"
          textAlign="center"
          onChange={handleChangeCreditCardSecondPassword}
          maxLength={CREDIT_CARD_LENGTH.password}
        />
        <S.PasswordBox>•</S.PasswordBox>
        <S.PasswordBox>•</S.PasswordBox>
      </CommonStyle.FlexBox>
    </InputLayout>
  );
}

export default CreditCardPasswordInput;
