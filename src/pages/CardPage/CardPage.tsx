import styled from '@emotion/styled';
import PreviewCard from '../../components/PreviewCard/PreviewCard';
import { CARD_PAGE_TEXT } from './cardPageText';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import FormSection from '../../components/FormSection/FormSection';
import useCardForm from '../../hooks/useCardForm';
import { useRef } from 'react';
import useFormSteps from '../../hooks/useFormSteps';

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

const StyledFloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 200px;
  background: #fff;
  background-color: #ffffff;
  padding: 20px 20px;
  border: none;
  border-radius: 100%;
  font-size: 18px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 1000;
`;

const StyledArrowImage = styled.img`
  position: absolute;
  width: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
        cardCompany: `${cardCompany.values[0]}`,
      },
    });
  };

  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  const handleScrollToConfirm = () => {
    confirmButtonRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const formSteps = useFormSteps({
    cardNumber,
    cardCompany,
    expirationDate,
    cvc,
    password,
    handleCardCompanySelect,
  });

  // const formSteps = [
  //   {
  //     id: 'cardNumber',
  //     title: CARD_PAGE_TEXT.CARD_NUMBER_TITLE,
  //     subtitle: CARD_PAGE_TEXT.CARD_NUMBER_SUBTITLE,
  //     shouldShow: () => true,
  //     component: (
  //       <CardNumberInput
  //         values={cardNumber.values}
  //         onChange={cardNumber.handleInput}
  //         onValidChange={cardNumber.setIsValid}
  //       />
  //     ),
  //   },
  //   {
  //     id: 'cardCompany',
  //     title: CARD_PAGE_TEXT.CARD_COMPANY_TITLE,
  //     subtitle: CARD_PAGE_TEXT.CARD_COMPANY_SUBTITLE,
  //     shouldShow: () => cardNumber.isValid,
  //     component: <Dropdown selected={cardCompany.values[0]} onChange={handleCardCompanySelect} />,
  //   },
  //   {
  //     id: 'expirationDate',
  //     title: CARD_PAGE_TEXT.EXPIRATION_TITLE,
  //     subtitle: CARD_PAGE_TEXT.EXPIRATION_SUBTITLE,
  //     shouldShow: () => cardNumber.isValid && cardCompany.values[0] !== '',
  //     component: (
  //       <ExpirationDateInput
  //         values={expirationDate.values}
  //         onChange={expirationDate.handleInput}
  //         onValidChange={expirationDate.setIsValid}
  //       />
  //     ),
  //   },
  //   {
  //     id: 'cvc',
  //     title: CARD_PAGE_TEXT.CVC_TITLE,
  //     subtitle: '',
  //     shouldShow: () =>
  //       cardNumber.isValid && cardCompany.values[0] !== '' && expirationDate.isValid,
  //     component: (
  //       <CVCInput values={cvc.values} onChange={cvc.handleInput} onValidChange={cvc.setIsValid} />
  //     ),
  //   },
  //   {
  //     id: 'password',
  //     title: CARD_PAGE_TEXT.PASSWORD_TITLE,
  //     subtitle: CARD_PAGE_TEXT.PASSWORD_SUBTITLE,
  //     shouldShow: () =>
  //       cardNumber.isValid && cardCompany.values[0] !== '' && expirationDate.isValid && cvc.isValid,
  //     component: (
  //       <PasswordInput
  //         values={password.values}
  //         onChange={password.handleInput}
  //         onValidChange={password.setIsValid}
  //       />
  //     ),
  //   },
  // ];

  return (
    <StyledCardPage>
      <PreviewCard
        cardNumber={cardNumber.values}
        expirationDate={expirationDate.values}
        cardCompany={cardCompany.values[0]}
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

      {isFormValid && (
        <>
          <StyledFloatingButton onClick={handleScrollToConfirm}>
            <StyledArrowImage src="./arrow.png"></StyledArrowImage>
          </StyledFloatingButton>
          <Button ref={confirmButtonRef} onClick={navigateToSuccessPage}>
            {CARD_PAGE_TEXT.CHECK}
          </Button>
        </>
      )}
    </StyledCardPage>
  );
};

export default CardPage;
