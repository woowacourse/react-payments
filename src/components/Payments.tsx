import { CardExpiredDate, CardIssuer, CardNumbers } from '../type';

import BottomButton from './BottomButton';
import CardForm from './CardForm';
import CardPreview from './CardPreview';
import { Link } from 'react-router-dom';
import { UseCardExpiredDate } from '../hooks/useCardExpiredDate';
import { UseCardHolder } from '../hooks/useCardHolder';
import { UseCardNumbers } from '../hooks/useCardNumbers';
import styled from '@emotion/styled';

interface Props {
  useCardNumbers: UseCardNumbers;
  useCardExpiredDate: UseCardExpiredDate;
  useCardHolder: UseCardHolder;
  cardIssuer: CardIssuer;
  setPath: () => void;
}

function PayMents({
  useCardNumbers,
  useCardExpiredDate,
  useCardHolder,
  cardIssuer,
  setPath,
}: Props) {
  setPath();
  const cardInfo = {
    cardNumbers: useCardNumbers.cardNumbers as CardNumbers,
    cardIssuer,
    expiredDate: useCardExpiredDate.expiredDate as CardExpiredDate,
    cardHolder: useCardHolder.holder,
  };

  const isValid =
    useCardNumbers.isValid &&
    useCardExpiredDate.isValid &&
    useCardHolder.isValid;
  return (
    <PaymentsContainer>
      <CardPreview cardInfo={cardInfo} />
      <CardForm
        useCardNumbers={useCardNumbers}
        useCardExpiredDate={useCardExpiredDate}
        useCardHolder={useCardHolder}
      />
      {isValid && (
        <Link to='/complete-payment-register'>
          <BottomButton>확인</BottomButton>
        </Link>
      )}
    </PaymentsContainer>
  );
}

export default PayMents;

const PaymentsContainer = styled.section({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
