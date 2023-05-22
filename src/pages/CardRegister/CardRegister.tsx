import React from 'react';
import Card from '../../components/@common/Card/Card';
import Layout from '../../components/@common/Layout/Layout';
import Loading from '../../components/@common/Loading/Loading';
import BankSelectDialog from '../../components/pages/CardRegister/BankSelectDialog/BankSelectDialog';
import CardCVCInput from '../../components/pages/CardRegister/CardCVCInput/CardCVCInput';
import CardExpirationDateInput from '../../components/pages/CardRegister/CardExpirationDateInput/CardExpirationDateInput';
import CardNameInput from '../../components/pages/CardRegister/CardNameInput/CardNameInput';
import CardNumberInput from '../../components/pages/CardRegister/CardNumberInput/CardNumberInput';
import CardPasswordInput from '../../components/pages/CardRegister/CardPasswordInput/CardPasswordInput';
import { BankInfo } from '../../constants/banks';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import { useCardRegister } from '../../hooks/card/card';
import { createCardRegisterAction } from '../../reducer/cardRegister/cardRegisterAction';
import * as Styled from './CardRegister.styles';

export default function CardRegister() {
  const { cardRegisterInfo, dispatch } = useCardRegisterContext();
  const { isLoading, isAllValid, handleSubmit, handleChange } = useCardRegister();

  const selectBank = (bank: BankInfo) => {
    dispatch(createCardRegisterAction('UPDATE_BANK', { value: bank }));
  };

  if (isLoading) return <Loading>카드 등록중...</Loading>;

  return (
    <Layout>
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
            {isAllValid && <Styled.CompleteButton>다음</Styled.CompleteButton>}
          </Styled.RegisterForm>
        </Styled.InfoSection>
        <BankSelectDialog onClick={selectBank} />
      </Styled.Root>
    </Layout>
  );
}
