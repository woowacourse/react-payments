import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@Components/Button';
import CreditCard from '@Components/CreditCard';
import Header from '@Components/Header';
import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';

import creditCard from '@Domains/creditCard';
import creditCardStorage from '@Domains/creditCard/creditCardStorage';

import * as Type from '@Types/index';

import {
  CreditCardRegisterContext,
  CreditCardRegisterUpdateContext,
} from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import * as S from './style';

function CreditCardAlias() {
  const navigate = useNavigate();

  const { creditCard: creditCardState } = useContext(CreditCardRegisterContext);
  const { update } = useContext(CreditCardRegisterUpdateContext);

  const handleChangeAlias = (event: React.ChangeEvent<HTMLInputElement>) => {
    update.alias(event.target.value);
  };

  const registerCreditCard = () => {
    const newCreditCard: Type.CreditCard = {
      id: creditCard.issueCreditCardId(),
      numbers: creditCardState.numbers,
      expiry: creditCardState.expiry,
      owner: creditCardState.owner,
      cvc: creditCardState.cvc,
      password: {
        first: creditCardState.password.first,
        second: creditCardState.password.second,
      },
      company: creditCardState.company,
      alias: creditCardState.alias,
    };

    creditCardStorage.saveCreditCard(newCreditCard);
    navigate('/');
  };

  useEffect(() => {
    if (!creditCardState.company) navigate('/register');
  }, []);

  return (
    <>
      <Header title="카드 별칭 등록" hasBackButton />
      <S.CreditCardAlias>
        <S.CompleteMessage>카드등록이 완료되었습니다.</S.CompleteMessage>
        <CreditCard
          numbers={creditCardState.numbers}
          expiry={creditCardState.expiry}
          owner={creditCardState.owner}
          company={creditCardState.company}
        />
        <S.AliasInputLayout>
          <Input
            type="string"
            value={creditCardState.alias}
            width="70%"
            textAlign="center"
            background="#ffffff"
            underline
            placeholder="카드 별칭을 등록하세요."
            onChange={handleChangeAlias}
          />
          <InputLabel label={`${creditCardState.alias.length} / 10`} />
        </S.AliasInputLayout>
        <Button
          text="확인"
          disabled={creditCardState.alias.length === 0}
          type="button"
          handleClick={registerCreditCard}
        />
      </S.CreditCardAlias>
    </>
  );
}

export default CreditCardAlias;
