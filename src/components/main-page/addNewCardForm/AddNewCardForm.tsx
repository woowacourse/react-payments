import styled from 'styled-components';
import { useState } from 'react';
import CardPreview from '../cardPreview/CardPreview';
import CardSelectSection from '../cardSelectSection/CardSelectSection';
import CardNumberSection from '../cardNumberSection/CardNumberSection';
import CardExpirationPeriodSection from '../cardExpirationPeriodSection/CardExpirationPeriodSection';
import CardCVCNumberSection from '../cardCVCNumberSection/CardCVCNumberSection';
import CardPasswordSection from '../cardPasswordSection/CardPasswordSection';
import { INITIALIZE_VALUE } from '../../../constants/constant';
import { ExpirationPeriod, Position } from '../../../types/index.types';
import Button from '../../common/button/Button';
import { useCardInfo } from '../CardInfoContext';
import { useNavigate } from 'react-router-dom';
import { useValidation } from '../../../hooks/useValidation';

const StyledFrame = styled.div`
  display: inline-flex;
  padding: 77px 30px 19px 31px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  background-color: white;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
`;

type ExpirationPeriodState = {
  [key in keyof ExpirationPeriod]: string;
};

function AddNewCardForm() {
  const [step, setStep] = useState(0);
  const viewNextInput = () => setStep((prev) => prev + 1);

  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriodState>({
    month: INITIALIZE_VALUE,
    year: INITIALIZE_VALUE,
  });
  const { cardNumber, setCardNumber, setSelectedCardCompany } = useCardInfo();
  const [CVCNumber, setCVCNumber] = useState(INITIALIZE_VALUE);
  const [password, setPassword] = useState(INITIALIZE_VALUE);
  const [cardColor, setCardColor] = useState('#333333');

  const { getErrorMessage, isInvalid } = useValidation();

  const navigate = useNavigate();

  const isValidForm = () => {
    return (
      !isInvalid('cardNumber', cardNumber.first) &&
      !isInvalid('cardNumber', cardNumber.second) &&
      !isInvalid('cardNumber', cardNumber.third) &&
      !isInvalid('cardNumber', cardNumber.fourth) &&
      !isInvalid('expirationMonth', expirationPeriod.month) &&
      !isInvalid('expirationYear', expirationPeriod.year) &&
      !isInvalid('CVC', CVCNumber) &&
      !isInvalid('password', password)
    );
  };

  function changeCardNumber(position: Position, number: string) {
    setCardNumber({
      ...cardNumber,
      [position]: number,
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

  function handleSubmit() {
    navigate('/announce');
  }

  return (
    <StyledFrame>
      <CardPreview cardNumber={cardNumber} expirationPeriod={expirationPeriod} backgroundColor={cardColor} />
      <StepContainer>
        {step >= 4 && (
          <CardPasswordSection
            password={password}
            changePassword={changePassword}
            getErrorMessage={getErrorMessage}
            viewNextInput={viewNextInput}
            isInvalid={isInvalid}
          />
        )}

        {step >= 3 && (
          <CardCVCNumberSection
            CVCNumber={CVCNumber}
            changeCVCNumber={changeCVCNumber}
            getErrorMessage={getErrorMessage}
            isInvalid={isInvalid}
            viewNextInput={viewNextInput}
          />
        )}

        {step >= 2 && (
          <CardExpirationPeriodSection
            expirationPeriod={expirationPeriod}
            changeExpirationPeriod={changeExpirationPeriod}
            getErrorMessage={getErrorMessage}
            isInvalid={isInvalid}
            viewNextInput={viewNextInput}
          />
        )}

        {step >= 1 && (
          <CardSelectSection
            onSelectCardCompany={(companyName: string, color: string) => {
              setSelectedCardCompany(companyName);
              setCardColor(color);
              viewNextInput();
            }}
          />
        )}

        {step >= 0 && (
          <CardNumberSection
            cardNumber={cardNumber}
            changeCardNumber={changeCardNumber}
            getErrorMessage={getErrorMessage}
            isInvalid={isInvalid}
            viewNextInput={viewNextInput}
          />
        )}
      </StepContainer>
      {step >= 5 && isValidForm() && <Button onClick={handleSubmit} />}
    </StyledFrame>
  );
}

export default AddNewCardForm;
