import { useControlledCardBrand } from '../../../components/CardBrand/hooks/useControlledCardBrand';
import { useControlledCardNumber } from '../../../components/CardNumber/hooks/useControlledCardNumber';
import { useControlledCardExpirationDate } from '../../../components/CardExpirationDate/hooks/useControlledCardExpirationDate';
import { useControlledCardCVCNumber } from '../../../components/CardCVCNumber/hooks/useControlledCardCVCNumber';
import { useControlledCardPasswordNumber } from '../../../components/CardPasswordNumber/hooks/useControlledCardPasswordNumber';

export const useControlledAddCardState = () => {
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

  const addFormState = {
    cardNumber,
    cardNumberErrorMessage,
    isCardNumberNextStep,
    handleCardNumberInputChange,
    cardBrandTypeState,
    isCardBrandNextStep,
    handleDropdownChange,
    cardExpirationDate,
    cardExpirationDateErrorMessage,
    isCardExpirationDateNextStep,
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
