import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CreditCard from '@Components/CreditCard';
import Header from '@Components/Header';

import creditCardStorage from '@Domains/creditCardStorage';

import * as Type from '@Types/index';

import * as S from './style';

function Home() {
  const navigate = useNavigate();
  const [creditCardList, setCreditCardList] = useState<Type.CreditCard[]>([]);

  useEffect(() => {
    setCreditCardList(creditCardStorage.getCreditCard());
  }, []);

  return (
    <>
      <Header title="보유카드" />
      <S.CreditCardList>
        {creditCardList.map((creditCard) => (
          <CreditCard
            key={creditCard.number}
            fullFilled
            company={creditCard.company}
            creditCard={{
              number: creditCard.number,
              expiry: creditCard.expiry,
              owner: creditCard.owner,
            }}
          />
        ))}
      </S.CreditCardList>
      <S.RegisterCreditCardContainer>
        {!creditCardList.length && <S.RegisterCreditCardText>새로운 카드를 등록해주세요.</S.RegisterCreditCardText>}
        <S.RegisterCreditCardButton type="button" onClick={() => navigate('/register')}>
          +
        </S.RegisterCreditCardButton>
      </S.RegisterCreditCardContainer>
    </>
  );
}
export default Home;
