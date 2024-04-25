import {
  CardNumberTextField,
  ExpirationDateTextField,
  OwnerNameTextField,
  PreviewCreditCard,
} from '@components/payments';
import CardBrandTextField from '@components/payments/@cardBrand/CardBrandTextField/CardBrandTextField';
import CardPasswordTextField from '@components/payments/@cardPassword/CardPasswordTextField/CardPasswordTextField';
import CVCNumberTextField from '@components/payments/@cvcNumber/CVCNumberTextField/CVCNumberTextField';
import Button from '@components/common/Button/Button';

import {
  PreviewCreditCardStyleContainer,
  TextFieldStyleContainer,
} from '@components/payments/CreditCardForm/container';

import { useChangeCardNumber, useChangeExpiration, useChangeOwnerName } from '@hooks/creditCard';
import useCardBrandDropdown from '@hooks/creditCard/useCardBrandDropdown';
import useChangeCVCNumber from '@hooks/creditCard/useChangeCVCNumber';
import { initialExpiration } from '@hooks/creditCard/useChangeExpiration';
import useChangePassword from '@hooks/creditCard/useChangeCardPassword';
import { CARD_BRAND_MAP } from '@components/payments/@cardBrand/CardBrandDropdown/CardBrandDropdown.constant';
import { isCardBrandName } from '@components/payments/@cardBrand/CardBrandDropdown/CardBrandDropdown.util';
import useMovePage from '@hooks/useMovePage';
import {
  isCompletedInputCVCNumber,
  isCompletedInputCardBrand,
  isCompletedInputCardNumber,
  isCompletedInputCardPassword,
  isCompletedInputExpiration,
  isCompletedInputOwnerName,
} from '@domain/creditCard';

const CreditCardForm: React.FC = () => {
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

  const { cardPassword, cardPasswordError, handleChangePassword } = useChangePassword();

  const handleMovePage = useMovePage();

  const isCardNumberError = cardNumberError.errorConditions.some((errorCondition) => errorCondition === true);

  const targetCardBrand = isCardBrandName(cardBrand) ? CARD_BRAND_MAP[cardBrand] : '';

  const isMountButton =
    isCompletedInputCardNumber(cardNumbers, isCardNumberError) &&
    isCompletedInputCardBrand(cardBrand, isDropdownOpen) &&
    isCompletedInputExpiration(expiration, expirationError) &&
    isCompletedInputOwnerName(ownerName, ownerNameError) &&
    isCompletedInputCVCNumber(cvcNumber, cvcError) &&
    isCompletedInputCardPassword(cardPassword, cardPasswordError);

  return (
    <>
      <PreviewCreditCardStyleContainer>
        <PreviewCreditCard
          cvcNumber={cvcNumber}
          cardBrand={cardBrand}
          cardNumbers={cardNumbers}
          expiration={expirationError.isError === true ? initialExpiration : expiration}
          ownerName={ownerName}
          isFocusedCVCNumber={isFocusedCVCNumber}
          isCardBrandChange={cardBrand !== ''}
        />
      </PreviewCreditCardStyleContainer>
      <TextFieldStyleContainer>
        {isCVCNumberCompleted && (
          <CardPasswordTextField
            cardPassword={cardPassword}
            cardPasswordError={cardPasswordError}
            onAddCardPassword={handleChangePassword}
          />
        )}
        {ownerName.length > 1 && isOwnerNameCompleted && (
          <CVCNumberTextField
            cvcNumber={cvcNumber}
            cvcError={cvcError}
            onFocusCVCNumberField={handleChangeCVCNumberFocus}
            onAddCVCNumber={handleChangeCVCNumber}
          />
        )}
        {isExpirationCompleted && (
          <OwnerNameTextField
            ownerName={ownerName}
            onAddOwnerName={handleOwnerNameChange}
            ownerNameError={ownerNameError}
          />
        )}
        {!isDropdownOpen && isCardBrandCompleted && (
          <ExpirationDateTextField
            month={expiration.month}
            year={expiration.year}
            onAddExpirationDate={handleExpirationChange}
            expirationError={expirationError}
          />
        )}
        {isCardNumberCompleted && (
          <CardBrandTextField
            isOpen={isDropdownOpen}
            currentCardBrand={cardBrand}
            onSelectCardBrand={handleSelectCardBrand}
            onToggleDropdown={handleToggle}
          />
        )}
        <CardNumberTextField
          isCardNumberError={isCardNumberError}
          cardNumbers={cardNumbers}
          onAddCardNumber={handleCardNumberChange}
          cardNumberError={cardNumberError}
        />
      </TextFieldStyleContainer>
      {isMountButton && (
        <Button
          isFloating
          onClick={() => {
            handleMovePage('/card-register-complete', {
              cardPassword,
              cardBrand: targetCardBrand,
            });
          }}
          size="large"
        >
          확인
        </Button>
      )}
    </>
  );
};

export default CreditCardForm;
