import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as Type from 'types';
import localStorageHelper from 'utils/localStorageHelper';
import * as S from './style';

function Home() {
  const navigate = useNavigate();
  const [creditCardList, setCreditCardList] = useState<Type.CreditCard[]>([]);

  useEffect(() => {
    setCreditCardList(localStorageHelper.getValue('creditCard', []));
  }, []);

  return (
    <S.HomeLayout>
      <S.HomeHeader>보유카드</S.HomeHeader>
      <S.CreditCardList>
        {creditCardList.map((creditCard) => (
          <CreditCard
            key={creditCard.number}
            fullFilled
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
