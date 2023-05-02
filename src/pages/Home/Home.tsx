import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';
import { useCreditCardList } from 'hooks/useCreditCardList';
import * as S from './style';

function Home() {
  const navigate = useNavigate();
  const { creditCardList } = useCreditCardList();
  return (
    <S.HomeLayout>
      <S.HomeHeader>보유카드</S.HomeHeader>
      <S.CreditCardList>
        {creditCardList.map((creditCard) => (
          <div key={creditCard.number}>
            <CreditCard
              fullFilled
              creditCard={{
                companyId: creditCard.companyId,
                number: creditCard.number,
                expiry: creditCard.expiry,
                owner: creditCard.owner,
              }}
            />
            <S.CreditCardNickname>{creditCard.nickname}</S.CreditCardNickname>
          </div>
        ))}
      </S.CreditCardList>
      <S.RegisterCreditCardContainer>
        {!creditCardList.length && (
          <S.RegisterCreditCardText>
            새로운 카드를 등록해주세요.
          </S.RegisterCreditCardText>
        )}
        <S.RegisterCreditCardButton
          type="button"
          onClick={() => navigate('/register')}
        >
          +
        </S.RegisterCreditCardButton>
      </S.RegisterCreditCardContainer>
    </S.HomeLayout>
  );
}
export default Home;
