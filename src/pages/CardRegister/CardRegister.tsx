import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/@common/Card/Card';
import BankSelectDialog from '../../components/pages/CardRegister/BankSelectDialog/BankSelectDialog';
import CardCVCInput from '../../components/pages/CardRegister/CardCVCInput/CardCVCInput';
import CardExpirationDateInput from '../../components/pages/CardRegister/CardExpirationDateInput/CardExpirationDateInput';
import CardNameInput from '../../components/pages/CardRegister/CardNameInput/CardNameInput';
import CardNumberInput from '../../components/pages/CardRegister/CardNumberInput/CardNumberInput';
import CardPasswordInput from '../../components/pages/CardRegister/CardPasswordInput/CardPasswordInput';
import { BankInfo } from '../../constants/banks';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import { useCardRegister } from '../../hooks/card/card';
import * as Styled from './CardRegister.styles';

export default function CardRegister() {
  const { cardRegisterInfo, handleCardInfo } = useCardRegisterContext();
  const { isAllFilled, handleSubmit, handleChange } = useCardRegister();

  const selectBank = (bank: BankInfo) => {
    handleCardInfo('bank', bank);
  };

  return (
    <Styled.Root>
      <Styled.CardSection>
        <Card type="card" {...cardRegisterInfo} />
      </Styled.CardSection>
      <Styled.InfoSection>
        <Styled.RegisterForm onSubmit={handleSubmit} onChange={handleChange}>
          <CardNumberInput />
          <CardExpirationDateInput />
          <CardNameInput />
          <CardCVCInput />
          <CardPasswordInput />
          {isAllFilled && <Styled.CompleteButton>다음</Styled.CompleteButton>}
        </Styled.RegisterForm>
      </Styled.InfoSection>
      <BankSelectDialog onClick={selectBank} />
    </Styled.Root>
  );
}
