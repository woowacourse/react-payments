import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@Components/Button';
import CreditCard from '@Components/CreditCard';
import Header from '@Components/Header';
import Input from '@Components/Input';

import { CreditCardRegisterContext } from '@Contexts/CreditCardRegisterContext';

import * as S from './style';

function CreditCardAlias() {
  const navigate = useNavigate();

  const { creditCard } = useContext(CreditCardRegisterContext);

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
        <Input
          type="string"
          value=""
          width="80%"
          textAlign="center"
          background="#ffffff"
          underline
          placeholder="카드 별칭을 등록하세요."
          onChange={() => {}}
        />
        <Button text="확인" disabled type="button" handleClick={() => {}} />
      </S.CreditCardAlias>
    </>
  );
}

export default CreditCardAlias;
