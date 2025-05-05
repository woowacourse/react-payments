import * as S from './AddCardPage.styles';
import CardPreview from './components/CardPreview/CardPreview';
import Spacing from '../../components/Spacing/Spacing';
import AddCardForm from './components/AddCardForm/AddCardForm';
import { AddCardFormProvider } from './context/useCardFormContext';

export default function AddCardPage() {
  return (
    <AddCardFormProvider>
      <S.Wrapper>
        <S.CardPreviewWrapper>
          <CardPreview />
        </S.CardPreviewWrapper>
        <Spacing size={60} />
        <AddCardForm />
      </S.Wrapper>
    </AddCardFormProvider>
  );
}
