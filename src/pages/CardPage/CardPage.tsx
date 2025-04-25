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
import Button from '../../components/Button/Button';
import useTotalInputValidation from '../../hooks/useTotalInputValidation';
import useStep from '../../hooks/useStep';
import { useNavigate } from 'react-router-dom';

export type HandleInputParams = {
  value: string;
  idx: number;
};

const CardPage = () => {
  const navigate = useNavigate();
  const [cardNumber, handleCardNumberInput] = useInput(['', '', '', '']);
  const [cardCompany, handleCardCompanyInput] = useSelect('');
  const [expirationDate, handleExpirationDateInput] = useInput(['', '']);
  const [cvc, handleCVCInput] = useInput(['']);
  const [password, handlePasswordInput] = useInput(['']);

  const { goToNextStep, isAtLeastAtStep, InputStep } = useStep();
  const { updateValidity, isAllValid } = useTotalInputValidation(5);

  const handleCardRegister = () => {
    navigate('/card/complete', {
      state: {
        cardNumber,
        cardCompany,
      },
    });
  };

  return (
    <StyledCardPage>
      <PreviewCard
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        cardCompany={cardCompany}
      />
      {isAtLeastAtStep(InputStep.PASSWORD) && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.PASSWORD_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.PASSWORD_SUBTITLE} />
          <PasswordInput
            values={password}
            onChange={handlePasswordInput}
            onComplete={() => goToNextStep(InputStep.PASSWORD)}
            onValidityChange={(isValid) => updateValidity(InputStep.PASSWORD, isValid)}
          />
        </>
      )}
      {isAtLeastAtStep(InputStep.CVC) && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.CVC_TITLE} />
          <CVCInput
            values={cvc}
            onChange={handleCVCInput}
            onComplete={() => goToNextStep(InputStep.CVC)}
            onValidityChange={(isValid) => updateValidity(InputStep.CVC, isValid)}
          />
        </>
      )}
      {isAtLeastAtStep(InputStep.EXPIRATION_DATE) && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.EXPIRATION_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.EXPIRATION_SUBTITLE} />
          <ExpirationDateInput
            values={expirationDate}
            onChange={handleExpirationDateInput}
            onComplete={() => goToNextStep(InputStep.EXPIRATION_DATE)}
            onValidityChange={(isValid) => updateValidity(InputStep.EXPIRATION_DATE, isValid)}
          />
        </>
      )}
      {isAtLeastAtStep(InputStep.CARD_COMPANY) && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.CARD_COMPANY_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_COMPANY_SUBTITLE} />
          <CardCompanySelectBox
            value={cardCompany}
            onChange={handleCardCompanyInput}
            onComplete={() => goToNextStep(InputStep.CARD_COMPANY)}
            onValidityChange={(isValid) => updateValidity(InputStep.CARD_COMPANY, isValid)}
          />
        </>
      )}
      {isAtLeastAtStep(InputStep.CARD_NUMBER) && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.CARD_NUMBER_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_NUMBER_SUBTITLE} />
          <CardNumberInput
            values={cardNumber}
            onChange={handleCardNumberInput}
            onComplete={() => goToNextStep(InputStep.CARD_NUMBER)}
            onValidityChange={(isValid) => updateValidity(InputStep.CARD_NUMBER, isValid)}
          />
        </>
      )}
      {isAllValid() && <Button onClick={handleCardRegister}>확인</Button>}
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
