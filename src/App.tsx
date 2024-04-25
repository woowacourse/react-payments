import './App.css';

import { CardExpiredDate, CardNumbers } from './type';

import BottomButton from './components/BottomButton';
import { COLOR } from './styles/color';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import { matchCardIssuer } from './domain/matchCardIssuer';
import styled from '@emotion/styled';
import useCardExpiredDate from './hooks/useCardExpiredDate';
import useCardHolder from './hooks/useCardHolder';
import useCardNumbers from './hooks/useCardNumbers';

function App() {
  const cardNumbers = useCardNumbers();
  const cardExpiredDate = useCardExpiredDate();
  const cardHolder = useCardHolder();
  const cardIssuer = matchCardIssuer(cardNumbers.cardNumbers.join(''));

  const cardInfo = {
    cardNumbers: cardNumbers.cardNumbers as CardNumbers,
    cardIssuer,
    expiredDate: cardExpiredDate.expiredDate as CardExpiredDate,
    cardHolder: cardHolder.holder,
  };

  const isValid =
    cardNumbers.isValid && cardExpiredDate.isValid && cardHolder.isValid;

  return (
    <Payments>
      <CardPreview cardInfo={cardInfo} />
      <CardForm
        useCardNumbers={cardNumbers}
        useCardExpiredDate={cardExpiredDate}
        useCardHolder={cardHolder}
      />
      {isValid && <BottomButton>확인</BottomButton>}
    </Payments>
  );
}

export default App;

const Payments = styled.section({
  position: 'relative',
  width: '376px',
  height: '700px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',
  overflowY: 'scroll',

  backgroundColor: COLOR.white,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
