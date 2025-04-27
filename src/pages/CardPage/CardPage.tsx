import styled from '@emotion/styled';
import CVCInput from '../../components/CVCInput/CVCInput';
import CardNumberInput from '../../components/CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../../components/ExpirationDateInput/ExpirationDateInput';
import PreviewCard from '../../components/PreviewCard/PreviewCard';
import { CARD_PAGE_TEXT } from './cardPageText';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import FormSection from '../../components/FormSection/FormSection';
import useCardForm from '../../hooks/useCardForm';

export type HandleInputParams = {
  e: React.ChangeEvent<HTMLInputElement>;
  idx: number;
};

const StyledCardPage = styled.div`
  width: 40%;
  min-width: 400px;
  min-height: 100vh;
  display: flex;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  overflow-y: auto;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
`;

const CardPage = () => {
  const {
    cardNumber,
    expirationDate,
    cvc,
    password,
    cardCompany,
    handleCardCompanySelect,
    isFormValid,
  } = useCardForm();

  const navigate = useNavigate();

  const navigateToSuccessPage = () => {
    navigate(`/registered`, {
      state: {
        cardNumber: `${cardNumber.values[0]}`,
        cardCompany: `${cardCompany}`,
      },
    });
  };

  const formSteps = [
    {
      id: 'cardNumber',
      title: CARD_PAGE_TEXT.CARD_NUMBER_TITLE,
      subtitle: CARD_PAGE_TEXT.CARD_NUMBER_SUBTITLE,
      shouldShow: () => true,
      component: (
        <CardNumberInput
          values={cardNumber.values}
          onChange={cardNumber.handleInput}
          onValidChange={cardNumber.setIsValid}
        />
      ),
    },
    {
      id: 'cardCompany',
      title: CARD_PAGE_TEXT.CARD_COMPANY_TITLE,
      subtitle: CARD_PAGE_TEXT.CARD_COMPANY_SUBTITLE,
      shouldShow: () => cardNumber.isValid,
      component: <Dropdown selected={cardCompany} onChange={handleCardCompanySelect} />,
    },
    {
      id: 'expirationDate',
      title: CARD_PAGE_TEXT.EXPIRATION_TITLE,
      subtitle: CARD_PAGE_TEXT.EXPIRATION_SUBTITLE,
      shouldShow: () => cardNumber.isValid && cardCompany !== '',
      component: (
        <ExpirationDateInput
          values={expirationDate.values}
          onChange={expirationDate.handleInput}
          onValidChange={expirationDate.setIsValid}
        />
      ),
    },
    {
      id: 'cvc',
      title: CARD_PAGE_TEXT.CVC_TITLE,
      subtitle: '',
      shouldShow: () => cardNumber.isValid && cardCompany !== '' && expirationDate.isValid,
      component: (
        <CVCInput values={cvc.values} onChange={cvc.handleInput} onValidChange={cvc.setIsValid} />
      ),
    },
    {
      id: 'password',
      title: CARD_PAGE_TEXT.PASSWORD_TITLE,
      subtitle: CARD_PAGE_TEXT.PASSWORD_SUBTITLE,
      shouldShow: () =>
        cardNumber.isValid && cardCompany !== '' && expirationDate.isValid && cvc.isValid,
      component: (
        <PasswordInput
          values={password.values}
          onChange={password.handleInput}
          onValidChange={password.setIsValid}
        />
      ),
    },
  ];

  return (
    <StyledCardPage>
      <PreviewCard
        cardNumber={cardNumber.values}
        expirationDate={expirationDate.values}
        cardCompany={cardCompany}
      />

      {formSteps
        .slice()
        .reverse()
        .map((step) => {
          if (!step.shouldShow()) return null;

          return (
            <FormSection key={step.id} title={step.title} subtitle={step.subtitle}>
              {step.component}
            </FormSection>
          );
        })}

      {isFormValid && <Button text={CARD_PAGE_TEXT.CHECK} onClick={navigateToSuccessPage}></Button>}
    </StyledCardPage>
  );
};

export default CardPage;
