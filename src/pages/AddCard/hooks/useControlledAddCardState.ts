import { useControlledCardBrand } from '../../../domain/card/CardBrand/hooks/useControlledCardBrand';
import { useControlledCardNumber } from '../../../domain/card/CardNumber/hooks/useControlledCardNumber';
import { useControlledCardExpirationDate } from '../../../domain/card/CardExpirationDate/hooks/useControlledCardExpirationDate';
import { useControlledCardCVCNumber } from '../../../domain/card/CardCVCNumber/hooks/useControlledCardCVCNumber';
import { useControlledCardPasswordNumber } from '../../../domain/card/CardPasswordNumber/hooks/useControlledCardPasswordNumber';

export const useControlledAddCardState = () => {
  const { cardNumber, cardNumberErrorMessage, isCardNumberNextStep, cardNumberRefs, handleCardNumberInputChange } =
    useControlledCardNumber();
  const { cardBrandTypeState, isCardBrandNextStep, handleDropdownChange } = useControlledCardBrand();
  const {
    cardExpirationDate,
    cardExpirationDateErrorMessage,
    isCardExpirationDateNextStep,
    cardExpirationDateRefs,
    handleCardExpirationDateInputChange,
  } = useControlledCardExpirationDate();
  const { cardCVCNumber, cardCVCNumberErrorMessage, isCardCVCNumberNextStep, handleCardCVCNumberInputChange } =
    useControlledCardCVCNumber();
  const { cardPassword, cardPasswordErrorMessage, isCardPasswordNextStep, handleCardPasswordInputChange } =
    useControlledCardPasswordNumber();

  const addFormState = {
    cardNumber,
    cardNumberErrorMessage,
    isCardNumberNextStep,
    cardNumberRefs,
    handleCardNumberInputChange,
    cardBrandTypeState,
    isCardBrandNextStep,
    handleDropdownChange,
    cardExpirationDate,
    cardExpirationDateErrorMessage,
    isCardExpirationDateNextStep,
    cardExpirationDateRefs,
    handleCardExpirationDateInputChange,
    cardCVCNumber,
    cardCVCNumberErrorMessage,
    isCardCVCNumberNextStep,
    handleCardCVCNumberInputChange,
    cardPassword,
    cardPasswordErrorMessage,
    isCardPasswordNextStep,
    handleCardPasswordInputChange,
  };

  return addFormState;
};
