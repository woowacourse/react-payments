import * as S from './AddCard.styles';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/common/Spacing/Spacing';
import AddCardForm from './AddCardForm';
import { useControlledCardBrand } from '../../components/CardBrand/hooks/useControlledCardBrand';
import { useControlledCardNumber } from '../../components/CardNumber/hooks/useControlledCardNumber';
import { useControlledCardExpirationDate } from '../../components/CardExpirationDate/hooks/useControlledCardExpirationDate';
import { useControlledCardCVCNumber } from '../../components/CardCVCNumber/hooks/useControlledCardCVCNumber';
import { useControlledCardPasswordNumber } from '../../components/CardPasswordNumber/hooks/useControlledCardPasswordNumber';

export default function AddCard() {
  const { cardNumber, cardNumberErrorMessage, isCardNumberNextStep, handleCardNumberInputChange } =
    useControlledCardNumber();
  const { cardBrandTypeState, isCardBrandNextStep, handleDropdownChange } = useControlledCardBrand();
  const {
    cardExpirationDate,
    cardExpirationDateErrorMessage,
    isCardExpirationDateNextStep,
    handleCardExpirationDateInputChange,
  } = useControlledCardExpirationDate();
  const { cardCVCNumber, cardCVCNumberErrorMessage, isCardCVCNumberNextStep, handleCardCVCNumberInputChange } =
    useControlledCardCVCNumber();
  const { cardPassword, cardPasswordErrorMessage, isCardPasswordNextStep, handleCardPasswordInputChange } =
    useControlledCardPasswordNumber();
  return (
    <S.Wrapper>
      <S.CardPreviewWrapper>
        <CardPreview
          cardNumber={cardNumber}
          cardExpirationDate={cardExpirationDate}
          CardBrandType={cardBrandTypeState}
        />
      </S.CardPreviewWrapper>
      <Spacing size={60} />
      <AddCardForm
        cardNumber={cardNumber}
        cardNumberErrorMessage={cardNumberErrorMessage}
        isCardNumberNextStep={isCardNumberNextStep}
        handleCardNumberInputChange={handleCardNumberInputChange}
        cardBrandType={cardBrandTypeState}
        isCardBrandNextStep={isCardBrandNextStep}
        handleDropdownChange={handleDropdownChange}
        cardExpirationDate={cardExpirationDate}
        cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
        isCardExpirationDateNextStep={isCardExpirationDateNextStep}
        handleCardExpirationDateInputChange={handleCardExpirationDateInputChange}
        cardCVCNumber={cardCVCNumber}
        cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
        isCardCVCNumberNextStep={isCardCVCNumberNextStep}
        handleCardCVCNumberInputChange={handleCardCVCNumberInputChange}
        cardPassword={cardPassword}
        cardPasswordErrorMessage={cardPasswordErrorMessage}
        isCardPasswordNextStep={isCardPasswordNextStep}
        handleCardPasswordInputChange={handleCardPasswordInputChange}
      />
    </S.Wrapper>
  );
}
