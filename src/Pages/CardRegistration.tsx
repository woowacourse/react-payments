import { useState } from 'react';
import styled from 'styled-components';
import Card, { CardNumber } from '../components/Card';
import Header from '../components/Header';
import PaymentsInputContainer from '../containers/PaymentsInputContainer';

export const useCardNumber = (initialState = ['', '', '', '']) => {
  const [cardNumber, _setCardNumber] = useState<CardNumber>(initialState as CardNumber);

  const setCardNumber = (index: number, value: string) => {
    const newCardNumber = [...cardNumber.slice(0, index), value, ...cardNumber.slice(index + 1)];
    _setCardNumber(newCardNumber as CardNumber);
  };

  return { cardNumber, setCardNumber };
};

export const useExpirationDate = (initialState = { year: 'YY', month: 'MM' }) => {
  const [expirationDate, setValue] = useState(initialState);
  const setExpirationDate = (index: number, value: string) => {
    if (index === 0) {
      setValue(prev => ({ ...prev, month: value }));
    }
    if (index === 1) {
      setValue(prev => ({ ...prev, year: value }));
    }
  };

  return { expirationDate, setExpirationDate };
};

export const useOwner = (initialState = 'NAME') => {
  const [owner, setValue] = useState(initialState);
  const setOwner = (value: string) => {
    setValue(value);
  };
  return { owner, setOwner };
};

const MainCardRegistration = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 12px;
  }
`;

function CardRegistration() {
  const { cardNumber, setCardNumber } = useCardNumber();
  const { expirationDate, setExpirationDate } = useExpirationDate();
  const { owner, setOwner } = useOwner();

  return (
    <>
      <Header title="카드 추가" hasBackHistory />
      <MainCardRegistration>
        <Card isAddForm cardInformation={{ cardNumber, expirationDate, owner }} />
        <PaymentsInputContainer setCardInformation={{ setCardNumber, setExpirationDate, setOwner }} />
      </MainCardRegistration>
    </>
  );
}

export default CardRegistration;
