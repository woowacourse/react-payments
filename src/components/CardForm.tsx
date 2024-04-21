import {
  CardExpiredDate as CardExpiredDateType,
  CardNumbers as CardNumbersType,
} from '../hooks/useCardInfo';
import { Dispatch, SetStateAction } from 'react';

import CardExpiredDate from './CardExpiredDate';
import CardHolder from './CardHolder';
import CardNumbers from './CardNumbers';
import styled from '@emotion/styled';

interface props {
  setCardNumbers: React.Dispatch<React.SetStateAction<CardNumbersType>>;
  setCardExpiredDate: Dispatch<SetStateAction<CardExpiredDateType>>;
  setCardHolder: Dispatch<SetStateAction<string>>;
}
export default function CardForm({
  setCardNumbers,
  setCardExpiredDate,
  setCardHolder,
}: props) {
  return (
    <CardFormContainer>
      <CardNumbers setCardNumbers={setCardNumbers} />
      <CardExpiredDate setCardExpiredDate={setCardExpiredDate} />
      <CardHolder setCardHolder={setCardHolder} />
    </CardFormContainer>
  );
}

const CardFormContainer = styled.form({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});
