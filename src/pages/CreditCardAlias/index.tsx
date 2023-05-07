import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@Components/Button';
import CreditCard from '@Components/CreditCard';
import Header from '@Components/Header';
import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import Loading from '@Components/Loading';

import useRegisterCreditCard from '@Hooks/useRegisterCreditCard';

import {
  CreditCardRegisterContext,
  CreditCardRegisterUpdateContext,
} from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import generatorRandomNumber from '@Utils/generatorRandomNumber';

import CARD_COMPANY from '@Constants/CardCompany';
import { CREDIT_CARD_MAX_LENGTH, REGISTER_MAX_TIME, REGISTER_MIN_TIME } from '@Constants/creditCard';
import { PATH_ALIAS } from '@Constants/routes';

import * as S from './style';

function CreditCardAlias() {
  const navigate = useNavigate();

  const [delayTime, setDelayTime] = useState(0);
  const { loading, registerCreditCard } = useRegisterCreditCard(delayTime);

  const { creditCard: creditCardState } = useContext(CreditCardRegisterContext);
  const { update } = useContext(CreditCardRegisterUpdateContext);

  const handleChangeAlias = (event: React.ChangeEvent<HTMLInputElement>) => {
    update.alias(event.target.value);
  };

  const handleClickConfirmButton = async () => {
    await registerCreditCard(creditCardState);
    navigate(PATH_ALIAS.home);
  };

  useEffect(() => {
    if (!creditCardState.company) navigate(PATH_ALIAS.register);
    setDelayTime(generatorRandomNumber.generateWithDecimalPoint(REGISTER_MIN_TIME, REGISTER_MAX_TIME));
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
            <InputLabel label={`${creditCardState.alias.length} / ${CREDIT_CARD_MAX_LENGTH.alias}`} />
          </S.AliasInputLayout>
          <Button
            text="확인"
            disabled={creditCardState.alias.length === 0}
            type="button"
            handleClick={handleClickConfirmButton}
          />
        </S.CreditCardAlias>
      )}
    </>
  );
}

export default CreditCardAlias;
