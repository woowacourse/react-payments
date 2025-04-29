import * as S from './AddCardPage.styles';
import CardPreview from './components/CardPreview/CardPreview';
import Spacing from '../../components/Spacing/Spacing';
import AddCardForm from './components/AddCardForm/AddCardForm';
import { useControlledAddCardState } from './hooks/useControlledAddCardState';

export default function AddCardPage() {
  const addFormState = useControlledAddCardState();
  return (
    <S.Wrapper>
      <S.CardPreviewWrapper>
        <CardPreview
          cardNumber={addFormState.cardNumber}
          cardExpirationDate={addFormState.cardExpirationDate}
          CardBrandType={addFormState.cardBrandTypeState}
        />
      </S.CardPreviewWrapper>
      <Spacing size={60} />
      <AddCardForm addFormState={addFormState} />
    </S.Wrapper>
  );
}
