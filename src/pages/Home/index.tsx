import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

function Home() {
  const navigate = useNavigate();
  return (
    <S.HomeLayout>
      <S.HomeHeader>보유카드</S.HomeHeader>
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
        <S.RegisterCreditCardButton type="button" onClick={() => navigate('/register')}>+</S.RegisterCreditCardButton>
      </S.RegisterCreditCardContainer>
    </S.HomeLayout>
  );
}
export default Home;
