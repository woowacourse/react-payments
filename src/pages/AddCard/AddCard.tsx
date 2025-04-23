import * as S from './AddCard.styles';
import CardNumber from '../../components/CardNumber/CardNumber';
import CardExpirationDate from '../../components/CardExpirationDate/CardExpirationDate';
import CardCVCNumber from '../../components/CardCVCNumber/CardCVCNumber';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/common/Spacing/Spacing';
import CardBrand from '../../components/CardBrand/CardBrand';
import CardPasswordNumber from '../../components/CardPasswordNumber/CardPasswordNumber';
import { useControlledCardBrand } from '../../components/CardBrand/hooks/useControlledCardBrand';
import { useControlledCardNumber } from '../../components/CardNumber/hooks/useControlledCardNumber';
import { useControlledCardExpirationDate } from '../../components/CardExpirationDate/hooks/useControlledCardExpirationDate';
import { useControlledCardCVCNumber } from '../../components/CardCVCNumber/hooks/useControlledCardCVCNumber';
import { useControlledCardPasswordNumber } from '../../components/CardPasswordNumber/hooks/useControlledCardPasswordNumber';

export default function AddCard() {
  const { cardNumber, cardNumberErrorMessage, handleCardNumberInputChange } = useControlledCardNumber();
  const { cardExpirationDate, cardExpirationDateErrorMessage, handleCardExpirationDateInputChange } =
    useControlledCardExpirationDate();
  const { cardCVCNumber, cardCVCNumberErrorMessage, handleCardCVCNumberInputChange } = useControlledCardCVCNumber();
  const { cardPassword, cardPasswordErrorMessage, handleCardPasswordInputChange } = useControlledCardPasswordNumber();
  const { cardBrandType, handleDropdownChange } = useControlledCardBrand();

  return (
    <S.Wrapper>
      <S.CardPreviewWrapper>
        <CardPreview cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} CardBrandType={cardBrandType} />
      </S.CardPreviewWrapper>
      <Spacing size={60} />
      <S.CardInfoForm>
        <CardNumber
          cardNumber={cardNumber}
          cardNumberErrorMessage={cardNumberErrorMessage}
          handleCardNumberInputChange={handleCardNumberInputChange}
        />
        <CardBrand CardBrandType={cardBrandType} handleDropdownChange={handleDropdownChange} />
        <CardExpirationDate
          cardExpirationDate={cardExpirationDate}
          cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
          handleCardExpirationDateInputChange={handleCardExpirationDateInputChange}
        />
        <CardCVCNumber
          cardCVCNumber={cardCVCNumber}
          cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
          handleCardCVCNumberInputChange={handleCardCVCNumberInputChange}
        />
        <CardPasswordNumber
          CardPassword={cardPassword}
          cardPasswordErrorMessage={cardPasswordErrorMessage}
          handleCardPasswordInputChange={handleCardPasswordInputChange}
        />
      </S.CardInfoForm>
    </S.Wrapper>
  );
}
