import CardCVC from './CardCVC';
import CardHolder from './CardHolder';
import CardIssuer from './CardIssuer';
import CardNumbers from './CardNumbers';
import CardPasswordHead from './CardPasswordHead';
import ExpiredDate from './CardExpiredDate';
import { UseCardCVC } from '../hooks/useCardCVC';
import { UseCardExpiredDate } from '../hooks/useCardExpiredDate';
import { UseCardHolder } from '../hooks/useCardHolder';
import { UseCardIssuer } from '../hooks/useCardIssuer';
import { UseCardNumbers } from '../hooks/useCardNumbers';
import { UseCardPasswordHead } from '../hooks/useCardPasswordHead';
import styled from '@emotion/styled';

interface props {
  useCardNumbers: UseCardNumbers;
  useCardExpiredDate: UseCardExpiredDate;
  useCardHolder: UseCardHolder;
  useCardIssuer: UseCardIssuer;
  useCardCVC: UseCardCVC;
  useCardPasswordHead: UseCardPasswordHead;
}
export default function CardForm({
  useCardNumbers,
  useCardExpiredDate,
  useCardHolder,
  useCardIssuer,
  useCardCVC,
  useCardPasswordHead,
}: props) {
  const states = [
    useCardPasswordHead,
    useCardCVC,
    useCardHolder,
    useCardExpiredDate,
    useCardIssuer,
    useCardNumbers,
  ];

  const elements = [
    <CardPasswordHead
      key='cardPasswordHead'
      useCardPasswordHead={useCardPasswordHead}
    />,
    <CardCVC key='cardCVC' useCardCVC={useCardCVC} />,
    <CardHolder key='cardHolder' useCardHolder={useCardHolder} />,
    <ExpiredDate key='expiredDate' useCardExpiredDate={useCardExpiredDate} />,
    <CardIssuer key='cardIssuer' useCardIssuer={useCardIssuer} />,
    <CardNumbers key='cardNumbers' useCardNumbers={useCardNumbers} />,
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
  height: '100%',
  paddingBottom: '180px',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
