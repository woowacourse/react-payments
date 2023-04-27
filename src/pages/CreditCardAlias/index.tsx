import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@Components/Button';
import CreditCard from '@Components/CreditCard';
import Header from '@Components/Header';
import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';

import creditCardStorage from '@Domains/creditCard/creditCardStorage';

import * as Type from '@Types/index';

import { CreditCardRegisterContext } from '@Contexts/CreditCardRegisterContext';

import * as S from './style';

function CreditCardAlias() {
  const navigate = useNavigate();

  const { creditCard, update } = useContext(CreditCardRegisterContext);

  const handleChangeAlias = (event: React.ChangeEvent<HTMLInputElement>) => {
    update.alias(event.target.value);
  };

  const registerCreditCard = () => {
    const newCreditCard: Type.CreditCard = {
      id: Date.now(),
      number: creditCard.numbers,
      expiry: creditCard.expiry,
      owner: creditCard.owner,
      cvc: creditCard.cvc,
      password: {
        first: creditCard.password.first,
        second: creditCard.password.second,
      },
      company: creditCard.company,
      alias: creditCard.alias,
    };

    creditCardStorage.saveCreditCard(newCreditCard);
    navigate('/');
  };

  useEffect(() => {
    if (!creditCard.company) navigate('/register');
  }, []);

  return (
    <>
      <Header title="카드 별칭 등록" hasBackButton />
      <S.CreditCardAlias>
        <S.CompleteMessage>카드등록이 완료되었습니다.</S.CompleteMessage>
        <CreditCard
          fullFilled={false}
          creditCard={{
            number: creditCard.numbers,
            expiry: creditCard.expiry,
            owner: creditCard.owner,
            company: creditCard.company,
          }}
        />
        <S.AliasInputLayout>
          <Input
            type="string"
            value={creditCard.alias}
            width="70%"
            textAlign="center"
            background="#ffffff"
            underline
            placeholder="카드 별칭을 등록하세요."
            onChange={handleChangeAlias}
          />
          <InputLabel label={`${creditCard.alias.length} / 10`} />
        </S.AliasInputLayout>
        <Button text="확인" disabled={creditCard.alias.length === 0} type="button" handleClick={registerCreditCard} />
      </S.CreditCardAlias>
    </>
  );
}

export default CreditCardAlias;
