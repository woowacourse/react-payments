import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';
import Box from 'components/Box';
import FlexBox from 'components/FlexBox';
import { creditCardListStore } from 'stores/creditCardListStore';
import { useSyncExternalStore } from 'react';
import * as S from './style';

function Home() {
  const navigate = useNavigate();
  const creditCardList = useSyncExternalStore(
    creditCardListStore.subscribe,
    creditCardListStore.getSnapshot
  );

  return (
    <S.HomeLayout>
      <S.HomeHeader>보유카드</S.HomeHeader>
      <S.CreditCardList>
        {creditCardList.map((creditCard) => (
          <Box key={creditCard.number}>
            <CreditCard
              fullFilled
              creditCard={{
                companyId: creditCard.companyId,
                number: creditCard.number,
                expiry: creditCard.expiry,
                owner: creditCard.owner,
              }}
            />
            <Box mt={2}>
              <FlexBox justifyContent="center">
                {creditCard.nickname}
              </FlexBox>
            </Box>
          </Box>
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
