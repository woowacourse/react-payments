/* eslint-disable @typescript-eslint/no-unused-vars */
import CreditCard from 'components/CreditCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as Type from 'types';
import * as S from './style';

function Home() {
  const navigate = useNavigate();
  const [creditCardList, setCreditCardList] = useState<Type.CreditCard[]>([]);

  const addNewCreditCard = (newCreditCard: Type.CreditCard) => {
    setCreditCardList([...creditCardList, newCreditCard]);
  };

  return (
    <S.HomeLayout>
      <S.HomeHeader>보유카드</S.HomeHeader>
      <div>{JSON.stringify(creditCardList)}</div>
      <S.CreditCardList>
        <CreditCard
          fullFilled
          creditCard={{
            number: '1234123412341234',
            expiry: '03/45',
            owner: 'NOAH',
          }}
        />
        <CreditCard
          fullFilled
          creditCard={{
            number: '1234123412341234',
            expiry: '03/45',
            owner: 'NOAH',
          }}
        />
        <CreditCard
          fullFilled
          creditCard={{
            number: '1234123412341234',
            expiry: '03/45',
            owner: 'NOAH',
          }}
        />
      </S.CreditCardList>
      <S.RegisterCreditCardContainer>
        <S.RegisterCreditCardText>새로운 카드를 등록해주세요.</S.RegisterCreditCardText>
        <S.RegisterCreditCardButton
          type="button"
          onClick={() => navigate('/register', {
            state: addNewCreditCard
          })}
        >
          +
        </S.RegisterCreditCardButton>
      </S.RegisterCreditCardContainer>
    </S.HomeLayout>
  );
}
export default Home;
