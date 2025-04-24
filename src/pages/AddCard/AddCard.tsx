import * as S from './AddCard.styles';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/common/Spacing/Spacing';
import AddCardForm from './AddCardForm';
import { useControlledAddCardState } from './hooks/useControlledAddCardState';

export default function AddCard() {
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
