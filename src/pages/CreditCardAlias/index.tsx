import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@Components/Button';
import CreditCard from '@Components/CreditCard';
import Header from '@Components/Header';
import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import Loading from '@Components/Loading';

import creditCard from '@Domains/creditCard';
import creditCardStorage from '@Domains/creditCard/creditCardStorage';

import * as Type from '@Types/index';

import {
  CreditCardRegisterContext,
  CreditCardRegisterUpdateContext,
} from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import CARD_COMPANY from '@Constants/CardCompany';

import * as S from './style';

function CreditCardAlias() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [delayTime, setDelayTime] = useState(0);

  const { creditCard: creditCardState } = useContext(CreditCardRegisterContext);
  const { update } = useContext(CreditCardRegisterUpdateContext);

  const handleChangeAlias = (event: React.ChangeEvent<HTMLInputElement>) => {
    update.alias(event.target.value);
  };

  const registerCreditCard = () => {
    setLoading(true);
    setTimeout(() => {
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
    }, delayTime);
  };

  useEffect(() => {
    if (!creditCardState.company) navigate('/register');
    setDelayTime(Math.random() + 1);
  }, []);

  return (
    <>
      <Header title="카드 별칭 등록" hasBackButton />
      {loading ? (
        <Loading
          explanation={`${creditCardState.alias}를 등록중입니다.`}
          delayTime={delayTime}
          backgroundColor={creditCardState.company ? CARD_COMPANY[creditCardState.company].uniqueColor : '#333333'}
        />
      ) : (
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
      )}
    </>
  );
}

export default CreditCardAlias;
