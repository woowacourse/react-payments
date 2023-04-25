import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CreditCard from '@Components/CreditCard';

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
    <S.HomeLayout>
      <S.HomeHeader>보유카드</S.HomeHeader>
      <S.CreditCardList>
        {creditCardList.map((creditCard) => (
          <CreditCard
            key={creditCard.number}
            fullFilled
            company="kb"
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
    </S.HomeLayout>
  );
}
export default Home;
