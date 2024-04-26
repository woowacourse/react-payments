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
  const states = [
    useCardHolder,
    useCardExpiredDate,
    useCardIssuer,
    useCardNumbers,
  ];

  const elements = [
    <CardHolder key={'cardHolder'} useCardHolder={useCardHolder} />,
    <ExpiredDate key={'expiredDate'} useCardExpiredDate={useCardExpiredDate} />,
    <CardIssuer key={'cardIssuer'} useCardIssuer={useCardIssuer} />,
    <CardNumbers key={'cardNumbers'} useCardNumbers={useCardNumbers} />,
  ];

  const lastValidIndex = states.findIndex(state => state.isValid);

  const sliceIndex =
    lastValidIndex === -1 ? -1 : Math.max(lastValidIndex - 1, 0);
  return <CardFormContainer>{elements.slice(sliceIndex)}</CardFormContainer>;
}

const CardFormContainer = styled.form({
  width: '315px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
