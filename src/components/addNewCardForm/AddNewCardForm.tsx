import styled from 'styled-components';
import { useState } from 'react';
import CardPreview from '../cardPreview/CardPreview';
import CardSelectSection from '../cardSelectSection/CardSelectSection';
import CardNumberSection from '../cardNumberSection/CardNumberSection';
import CardExpirationPeriodSection from '../cardExpirationPeriodSection/CardExpirationPeriodSection';
import CardCVCNumberSection from '../cardCVCNumberSection/CardCVCNumberSection';
import CardPasswordSection from '../cardPasswordSection/CardPasswordSection';
import { INITIALIZE_VALUE } from '../../constants/constant';
import { ExpirationPeriod, Position } from '../../types/index.types';

const StyledFrame = styled.div`
  display: inline-flex;
  padding: 77px 30px 19px 31px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 45px;
  background-color: white;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
`;

type CardNumberState = {
  [key in Position]: string;
};

type ExpirationPeriodState = {
  [key in keyof ExpirationPeriod]: string;
};

function AddNewCardForm() {
  const [cardNumber, setCardNumber] = useState<CardNumberState>({
    first: INITIALIZE_VALUE,
    second: INITIALIZE_VALUE,
    third: INITIALIZE_VALUE,
    fourth: INITIALIZE_VALUE,
  });

  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriodState>({
    month: INITIALIZE_VALUE,
    year: INITIALIZE_VALUE,
  });

  const [CVCNumber, setCVCNumber] = useState(INITIALIZE_VALUE);
  const [password, setPassword] = useState(INITIALIZE_VALUE);

  const [selectedCardCompany, setSelectedCardCompany] = useState('');
  const [cardColor, setCardColor] = useState('#333333');

  function changeCardNumber(position: Position, cardNumber: string) {
    setCardNumber((prev) => {
      prev[position] = cardNumber;
      return { ...prev };
    });
  }

  function changeExpirationPeriod(expirationPeriod: keyof ExpirationPeriod, date: string) {
    setExpirationPeriod((prev) => {
      prev[expirationPeriod] = date;
      return { ...prev };
    });
  }

  function changeCVCNumber(CVCNumber: string) {
    setCVCNumber(CVCNumber);
  }

  function changePassword(password: string) {
    setPassword(password);
  }

  return (
    <StyledFrame>
      <CardPreview cardNumber={cardNumber} expirationPeriod={expirationPeriod} backgroundColor={cardColor} />
      <CardNumberSection cardNumber={cardNumber} changeCardNumber={changeCardNumber} />
      <CardSelectSection
        onSelectCardCompany={(companyName: string, color: string) => {
          setSelectedCardCompany(companyName);
          setCardColor(color);
        }}
      />

      <CardExpirationPeriodSection
        expirationPeriod={expirationPeriod}
        changeExpirationPeriod={changeExpirationPeriod}
      />
      <CardCVCNumberSection CVCNumber={CVCNumber} changeCVCNumber={changeCVCNumber} />
      <CardPasswordSection password={password} changePassword={changePassword} />
    </StyledFrame>
  );
}

export default AddNewCardForm;
