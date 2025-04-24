import styled from '@emotion/styled';
import { CARD_PAGE_TEXT } from '../../constants/cardPageText';
import PreviewCard from './components/PreviewCard/PreviewCard';
import Text from '../../components/Text/Text';
import CardNumberInput from './components/CardNumberInput/CardNumberInput';
import ExpirationDateInput from './components/ExpirationDateInput/ExpirationDateInput';
import CVCInput from './components/CVCInput/CVCInput';
import { useInput } from '../../hooks/useInput';
import CardCompanySelectBox from './components/CardCompanySelectBox/CardCompanySelectBox';
import PasswordInput from './components/PasswordInput/PasswordInput';
import { useSelect } from '../../hooks/useSelect';
import { useState } from 'react';
import Button from '../../components/Button/Button';

export type HandleInputParams = {
  value: string;
  idx: number;
};

enum InputStep {
  CARD_NUMBER = 0,
  CARD_COMPANY = 1,
  EXPIRATION_DATE = 2,
  CVC = 3,
  PASSWORD = 4,
  COMPLETED = 5,
}

const CardPage = () => {
  const [cardNumber, handleCardNumberInput] = useInput(['', '', '', '']);
  const [cardCompany, handleCardCompanyInput] = useSelect('');
  const [expirationDate, handleExpirationDateInput] = useInput(['', '']);
  const [cvc, handleCVCInput] = useInput(['']);
  const [password, handlePasswordInput] = useInput(['']);

  const [currentStep, setCurrentStep] = useState<InputStep>(InputStep.CARD_NUMBER);
  const [isValidInput, setIsValidInput] = useState(Array.from({ length: 5 }, () => false));

  const updateValidity = (step: InputStep, isValid: boolean) => {
    setIsValidInput((prev) => {
      const updated = [...prev];
      updated[step] = isValid;
      return updated;
    });
  };

  const isPossibleEnrollCard = isValidInput.every((isValid) => isValid);

  return (
    <StyledCardPage>
      <PreviewCard cardNumber={cardNumber} expirationDate={expirationDate} />
      {currentStep >= InputStep.PASSWORD && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.PASSWORD_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.PASSWORD_SUBTITLE} />
          <PasswordInput
            values={password}
            onChange={handlePasswordInput}
            onComplete={() => setCurrentStep(InputStep.COMPLETED)}
            onValidityChange={(isValid) => updateValidity(InputStep.PASSWORD, isValid)}
          />
        </>
      )}
      {currentStep >= InputStep.CVC && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.CVC_TITLE} />
          <CVCInput
            values={cvc}
            onChange={handleCVCInput}
            onComplete={() => setCurrentStep(InputStep.PASSWORD)}
            onValidityChange={(isValid) => updateValidity(InputStep.CVC, isValid)}
          />
        </>
      )}
      {currentStep >= InputStep.EXPIRATION_DATE && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.EXPIRATION_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.EXPIRATION_SUBTITLE} />
          <ExpirationDateInput
            values={expirationDate}
            onChange={handleExpirationDateInput}
            onComplete={() => setCurrentStep(InputStep.CVC)}
            onValidityChange={(isValid) => updateValidity(InputStep.EXPIRATION_DATE, isValid)}
          />
        </>
      )}
      {currentStep >= InputStep.CARD_COMPANY && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.CARD_COMPANY_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_COMPANY_SUBTITLE} />
          <CardCompanySelectBox
            value={cardCompany}
            onChange={handleCardCompanyInput}
            onComplete={() => setCurrentStep(InputStep.EXPIRATION_DATE)}
            onValidityChange={(isValid) => updateValidity(InputStep.CARD_COMPANY, isValid)}
          />
        </>
      )}
      {currentStep >= InputStep.CARD_NUMBER && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.CARD_NUMBER_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_NUMBER_SUBTITLE} />
          <CardNumberInput
            values={cardNumber}
            onChange={handleCardNumberInput}
            onComplete={() => setCurrentStep(InputStep.CARD_COMPANY)}
            onValidityChange={(isValid) => updateValidity(InputStep.CARD_NUMBER, isValid)}
          />
        </>
      )}
      {isPossibleEnrollCard && <Button>등록</Button>}
    </StyledCardPage>
  );
};

export default CardPage;

const StyledCardPage = styled.div`
  width: 40%;
  min-width: 400px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
`;
