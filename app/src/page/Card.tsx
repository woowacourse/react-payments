import { CardPreview } from '../components/preview/CardPreview.tsx';
import { CardForm } from '../components/form/CardForm.tsx';
import styled from '@emotion/styled';
import { CardContext } from '../context/CardContext.ts';
import { useCardForm } from '../hooks/useCardForm.ts';

export function Card() {
  const cardForm = useCardForm();

  return (
    <CardContext
      value={{
        cardNumber: cardForm.cardNumber,
        cardExpiryDate: cardForm.cardExpiryDate,
        cardCompany: cardForm.cardCompany,
        cardCVC: cardForm.cardCVC,
        cardPassword: cardForm.cardPassword,
        networkBrand: cardForm.networkBrand,
        setCardNumber: cardForm.setCardNumber,
        setCardExpiryDate: cardForm.setCardExpiryDate,
        setCardCompany: cardForm.setCardCompany,
        setCardCVC: cardForm.setCardCVC,
        setCardPassword: cardForm.setCardPassword,
      }}
    >
      <CardContainer>
        <CardPreview />
        <CardForm
          refs={cardForm.refs}
          currentStep={cardForm.currentStep}
          isFormComplete={cardForm.isFormComplete}
          onCardNumberComplete={cardForm.onCardNumberComplete}
          onCardCompanySelected={cardForm.onCardCompanySelected}
          onCardExpiryDateComplete={cardForm.onCardExpiryDateComplete}
          onCardCVCComplete={cardForm.onCardCVCComplete}
          handleFormSubmit={cardForm.handleFormSubmit}
        />
      </CardContainer>
    </CardContext>
  );
}

const CardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
