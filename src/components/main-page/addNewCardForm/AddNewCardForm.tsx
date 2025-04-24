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

  const [openButton, setOpenButton] = useState(false);
  const handleOpenButton = () => setOpenButton(true);

  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriodState>({
    month: INITIALIZE_VALUE,
    year: INITIALIZE_VALUE,
  });
  const [CVCNumber, setCVCNumber] = useState(INITIALIZE_VALUE);
  const [password, setPassword] = useState(INITIALIZE_VALUE);
  const [cardColor, setCardColor] = useState('#333333');

  const { cardNumber, setCardNumber, setSelectedCardCompany } = useCardInfo();
  const navigate = useNavigate();

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
            handleOpenButton={handleOpenButton}
          />
        )}

        {step >= 3 && (
          <CardCVCNumberSection CVCNumber={CVCNumber} changeCVCNumber={changeCVCNumber} viewNextInput={viewNextInput} />
        )}

        {step >= 2 && (
          <CardExpirationPeriodSection
            expirationPeriod={expirationPeriod}
            changeExpirationPeriod={changeExpirationPeriod}
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
            viewNextInput={viewNextInput}
          />
        )}
      </StepContainer>
      {openButton && <Button onClick={handleSubmit} />}
    </StyledFrame>
  );
}

export default AddNewCardForm;
