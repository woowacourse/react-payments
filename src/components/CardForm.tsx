import CardHolder from './CardHolder';
import CardIssuer from './CardIssuer';
import CardNumbers from './CardNumbers';
import ExpiredDate from './CardExpiredDate';
import { UseCardExpiredDate } from '../hooks/useCardExpiredDate';
import { UseCardHolder } from '../hooks/useCardHolder';
import { UseCardIssuer } from '../hooks/useCardIssuer';
import { UseCardNumbers } from '../hooks/useCardNumbers';
import styled from '@emotion/styled';

interface props {
  useCardNumbers: UseCardNumbers;
  useCardExpiredDate: UseCardExpiredDate;
  useCardHolder: UseCardHolder;
  useCardIssuer: UseCardIssuer;
}
export default function CardForm({
  useCardNumbers,
  useCardExpiredDate,
  useCardHolder,
  useCardIssuer,
}: props) {
  return (
    <CardFormContainer>
      <CardNumbers useCardNumbers={useCardNumbers} />
      <ExpiredDate useCardExpiredDate={useCardExpiredDate} />
      <CardIssuer useCardIssuer={useCardIssuer} />
      <CardHolder useCardHolder={useCardHolder} />
    </CardFormContainer>
  );
}

const CardFormContainer = styled.form({
  width: '315px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});
