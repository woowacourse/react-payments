import { PreviewCreditCardStyleContainer, TextFieldStyleContainer } from './container';

import {
  CardNumberTextField,
  ExpirationDateTextField,
  OwnerNameTextField,
  PreviewCreditCard,
  CardBrandTextField,
  CardPasswordTextField,
  CVCNumberTextField,
} from '@components/payments/@cardRegister';

import { Button } from '@components/common';

import { CARD_BRAND_MAP } from '@components/payments/@cardRegister/@cardBrand/CardBrandDropdown/CardBrandDropdown.constant';
import { isCardBrandName } from '@components/payments/@cardRegister/@cardBrand/CardBrandDropdown/CardBrandDropdown.util';

import useMovePage from '@hooks/useMovePage';
import useCreditCardForm from '@hooks/creditCard/useCreditCardForm';

import { ROUTE_ENDPOINT_MAP } from '@routes/constant';

const CreditCardForm: React.FC = () => {
  const {
    formState: { cardBrand, cardNumbers, cardPassword, cvcNumber, ownerName, expiration },
    formErrors: { cvcError, expirationError, ownerNameError, cardNumberError, cardPasswordError },
    formInteractionState,
    formHandlers,
  } = useCreditCardForm();

  const handleMovePage = useMovePage(ROUTE_ENDPOINT_MAP.cardRegisterComplete, {
    cardPassword,
    cardBrand: isCardBrandName(cardBrand) ? CARD_BRAND_MAP[cardBrand] : '',
  });

  const previewCreditCardProps = {
    cvcNumber,
    cardBrand,
    cardNumbers,
    expiration,
    ownerName,
    isFocusedCVCNumber: formInteractionState.isFocusedCVCNumber,
    isCardBrandChange: cardBrand !== '',
  };

  const cardPasswordTextFieldProps = {
    cardPassword,
    cardPasswordError,
    onAddCardPassword: formHandlers.handleChangePassword,
  };

  const cvcNumberTextFieldProps = {
    cvcNumber: cvcNumber,
    cvcError: cvcError,
    onFocusCVCNumberField: formHandlers.handleChangeCVCNumberFocus,
    onAddCVCNumber: formHandlers.handleChangeCVCNumber,
  };

  const ownerNameTextFieldProps = {
    ownerName,
    ownerNameError,
    onAddOwnerName: formHandlers.handleOwnerNameChange,
    onKeyDown: formHandlers.handleEnterOwnerNameInput,
  };

  const expirationDateTextFieldProps = {
    month: expiration.month,
    year: expiration.year,
    onAddExpirationDate: formHandlers.handleExpirationChange,
    expirationError: expirationError,
  };

  const cardBrandTextFieldProps = {
    isOpen: formInteractionState.isDropdownOpen,
    currentCardBrand: cardBrand,
    onSelectCardBrand: formHandlers.handleSelectCardBrand,
    onToggleDropdown: formHandlers.handleToggle,
  };

  const cardNumberTextFieldProps = {
    isCardNumberError: formInteractionState.isCardNumberError,
    cardNumbers: cardNumbers,
    onAddCardNumber: formHandlers.handleCardNumberChange,
    cardNumberError: cardNumberError,
  };

  return (
    <>
      <PreviewCreditCardStyleContainer>
        <PreviewCreditCard {...previewCreditCardProps} />
      </PreviewCreditCardStyleContainer>
      <TextFieldStyleContainer>
        {formInteractionState.isCVCNumberCompleted && <CardPasswordTextField {...cardPasswordTextFieldProps} />}
        {formInteractionState.isOwnerNameCompleted && <CVCNumberTextField {...cvcNumberTextFieldProps} />}
        {formInteractionState.isExpirationCompleted && <OwnerNameTextField {...ownerNameTextFieldProps} />}
        {!formInteractionState.isDropdownOpen && formInteractionState.isCardBrandCompleted && (
          <ExpirationDateTextField {...expirationDateTextFieldProps} />
        )}
        {formInteractionState.isCardNumberCompleted && <CardBrandTextField {...cardBrandTextFieldProps} />}
        <CardNumberTextField {...cardNumberTextFieldProps} />
      </TextFieldStyleContainer>
      {formInteractionState.isMountButton && (
        <Button isFloating onClick={() => handleMovePage()} size="large">
          확인
        </Button>
      )}
    </>
  );
};

export default CreditCardForm;
