import styled from 'styled-components';
import { MobileLayoutContainer } from '../components/common/MobileLayoutContainer';
import CardPreview from '../components/features/payments/CardPreview/CardPreview';
import usePaymentsForm from '../components/features/payments/hooks/usePaymentsForm';
import PaymentsFormFields from '../components/features/payments/PaymentsForm/PaymentsFormFields';

function CardRegisterPage() {
  const {
    paymentsFormValues,
    paymentsFormInputRefs,
    paymentsFormErrorTypes,
    paymentsFormHandlers,
    paymentFormBlurHandlers,
    inputStep,
    cardType,
    allInputComplete,
    handleSubmit,
  } = usePaymentsForm();

  return (
    <MobileLayoutContainer>
      <RegisterPageContainer>
        <CardPreview
          cardNumberInputValue={paymentsFormValues.cardNumber}
          cardBank={paymentsFormValues.cardBank}
          expirationDateInputValue={paymentsFormValues.expirationDate}
          cardType={cardType}
        />
        <PaymentsFormFields
          paymentsFormValues={paymentsFormValues}
          paymentsFormInputRefs={paymentsFormInputRefs}
          paymentsFormErrorTypes={paymentsFormErrorTypes}
          paymentsFormHandlers={paymentsFormHandlers}
          paymentFormBlurHandlers={paymentFormBlurHandlers}
          inputStep={inputStep}
          allInputComplete={allInputComplete}
          handleSubmit={handleSubmit}
        />
      </RegisterPageContainer>
    </MobileLayoutContainer>
  );
}

const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
  padding: 44px 28px;
  min-height: 100vh;
`;

export default CardRegisterPage;
