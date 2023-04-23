import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/@common/Card/Card';
import CardCVCInput from '../../components/pages/CardRegister/CardCVCInput/CardCVCInput';
import CardExpirationDateInput from '../../components/pages/CardRegister/CardExpirationDateInput/CardExpirationDateInput';
import CardNameInput from '../../components/pages/CardRegister/CardNameInput/CardNameInput';
import CardNumberInput from '../../components/pages/CardRegister/CardNumberInput/CardNumberInput';
import CardPasswordInput from '../../components/pages/CardRegister/CardPasswordInput/CardPasswordInput';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import { useMyCardRegister } from '../../hooks/card/card';
import * as Styled from './CardRegister.styles';

export default function CardRegister() {
  const { cardRegisterInfo } = useCardRegisterContext();
  const { isAllValid, handleSubmit, handleChange } = useMyCardRegister();

  return (
    <Styled.Root>
      <Styled.CardSection>
        <Card type="card" {...cardRegisterInfo} />
      </Styled.CardSection>
      <Styled.InfoSection>
        <Styled.RegisterForm onSubmit={handleSubmit(cardRegisterInfo)} onChange={handleChange}>
          <CardNumberInput />
          <CardExpirationDateInput />
          <CardNameInput />
          <CardCVCInput />
          <CardPasswordInput />
          {isAllValid && <Styled.CompleteButton>바로</Styled.CompleteButton>}
        </Styled.RegisterForm>
      </Styled.InfoSection>
    </Styled.Root>
  );
}
