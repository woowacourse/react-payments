import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CreditCard from '@Components/CreditCard';
import Header from '@Components/Header';

import creditCardStorage from '@Domains/creditCard/creditCardStorage';

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
      <S.CreditCardLayout>
        <S.CreditCardList>
          {creditCardList.map((creditCard) => (
            <S.CreditCardItem key={creditCard.id}>
              <CreditCard
                fullFilled
                creditCard={{
                  number: creditCard.number,
                  expiry: creditCard.expiry,
                  owner: creditCard.owner,
                  company: creditCard.company,
                }}
              />
              <S.CreditCardAlias>{creditCard.alias}</S.CreditCardAlias>
            </S.CreditCardItem>
          ))}
        </S.CreditCardList>
        <S.RegisterCreditCardContainer>
          {!creditCardList.length && <S.RegisterCreditCardText>새로운 카드를 등록해주세요.</S.RegisterCreditCardText>}
          <S.RegisterCreditCardButton type="button" onClick={() => navigate('/register')}>
            +
          </S.RegisterCreditCardButton>
        </S.RegisterCreditCardContainer>
      </S.CreditCardLayout>
    </>
  );
}
export default Home;
