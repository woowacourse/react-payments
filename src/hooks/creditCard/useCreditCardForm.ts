import {
  isCompletedInputCVCNumber,
  isCompletedInputCardBrand,
  isCompletedInputCardNumber,
  isCompletedInputCardPassword,
  isCompletedInputExpiration,
  isCompletedInputOwnerName,
} from '@domain/creditCard';

import {
  useCardBrandDropdown,
  useChangeCVCNumber,
  useChangeCardNumber,
  useChangeCardPassword,
  useChangeExpiration,
  useChangeOwnerName,
} from '@hooks/creditCard';

const useCreditCardForm = () => {
  const { isCardNumberCompleted, cardNumbers, cardNumberError, handleCardNumberChange } = useChangeCardNumber();

  const { cardBrand, isDropdownOpen, isCardBrandCompleted, handleSelectCardBrand, handleToggle } =
    useCardBrandDropdown();

  const { isExpirationCompleted, expiration, expirationError, handleExpirationChange } = useChangeExpiration();

  const { isOwnerNameCompleted, ownerName, ownerNameError, handleOwnerNameChange } = useChangeOwnerName();

  const {
    isCVCNumberCompleted,
    isFocusedCVCNumber,
    cvcNumber,
    cvcError,
    handleChangeCVCNumber,
    handleChangeCVCNumberFocus,
  } = useChangeCVCNumber();

  const { cardPassword, cardPasswordError, handleChangePassword } = useChangeCardPassword();

  const isCardNumberError = cardNumberError.errorConditions.some((errorCondition) => errorCondition === true);

  const isMountButton =
    isCompletedInputCardNumber(cardNumbers, isCardNumberError) &&
    isCompletedInputCardBrand(cardBrand, isDropdownOpen) &&
    isCompletedInputExpiration(expiration, expirationError) &&
    isCompletedInputOwnerName(ownerName, ownerNameError) &&
    isCompletedInputCVCNumber(cvcNumber, cvcError) &&
    isCompletedInputCardPassword(cardPassword, cardPasswordError);

  return {
    formState: { cardBrand, cardNumbers, expiration, ownerName, cvcNumber, cardPassword },
    formErrors: { cvcError, expirationError, ownerNameError, cardNumberError, cardPasswordError },
    formInteractionState: {
      isCVCNumberCompleted,
      isCardBrandCompleted,
      isCardNumberCompleted,
      isExpirationCompleted,
      isOwnerNameCompleted,
      isDropdownOpen,
      isFocusedCVCNumber,
      isCardNumberError,
      isMountButton,
    },
    formHandlers: {
      handleChangePassword,
      handleChangeCVCNumberFocus,
      handleChangeCVCNumber,
      handleCardNumberChange,
      handleSelectCardBrand,
      handleToggle,
      handleExpirationChange,
      handleOwnerNameChange,
    },
  };
};

export default useCreditCardForm;
