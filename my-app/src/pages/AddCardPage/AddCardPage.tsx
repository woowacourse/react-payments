import { StyledContainer } from './AddCardPage.styles';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardForm from '../../components/CardForm/CardForm';
import useCardForm from '../../hooks/useCardForm';
import useAddCard from '../../hooks/useAddCard';

function AddCardPage() {
  const { cardForm, updateCardForm } = useCardForm();
  const { serverErrors, clearServerError, addCardItem } = useAddCard(cardForm);

  async function handleOnSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    await addCardItem();
  }

  return (
    <StyledContainer>
      <CardPreview
        cardNumber={cardForm.cardNumber}
        expirationDate={cardForm.cardExpirationDate}
        cardIssuer={cardForm.cardIssuer}
      />
      <CardForm
        cardForm={cardForm}
        updateCardForm={updateCardForm}
        handleOnSubmit={handleOnSubmit}
        serverErrors={serverErrors}
        clearServerError={clearServerError}
      />
    </StyledContainer>
  );
}

export default AddCardPage;
