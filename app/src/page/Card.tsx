import { CardPreview } from '../components/preview/CardPreview.tsx';
import { CardForm } from '../components/form/CardForm.tsx';
import styled from '@emotion/styled';
import { CardContext } from '../context/CardContext.ts';
import { useCardForm } from '../hooks/useCardForm.ts';

export function Card() {
  const {
    cardCompany,
    cardNumber,
    cardExpiryDate,
    cardCVC,
    cardPassword,
    setCardCompany,
    setCardNumber,
    setCardExpiryDate,
    setCardCVC,
    setCardPassword,
  } = useCardForm();

  return (
    <CardContext
      value={{
        cardNumber,
        cardExpiryDate,
        cardCompany,
        cardCVC,
        cardPassword,
        setCardNumber,
        setCardExpiryDate,
        setCardCompany,
        setCardCVC,
        setCardPassword,
      }}
    >
      <CardContainer>
        <CardPreview />
        <CardForm />
      </CardContainer>
    </CardContext>
  );
}

const CardContainer = styled.div`
  margin-bottom: auto;
  margin-top: auto;
`;
