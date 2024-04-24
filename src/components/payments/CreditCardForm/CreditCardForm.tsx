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

const CreditCardForm: React.FC = () => {
  const { isCardNumberCompleted, cardNumbers, cardNumberError, handleCardNumberChange } = useChangeCardNumber();

  const {
    cardBrand,
    isOpen: isDropdownOpen,
    isCardBrandCompleted,
    handleSelectCardBrand,
    handleToggle,
  } = useCardBrandDropdown();

  const { isExpirationCompleted, expiration, expirationError, handleExpirationChange } = useChangeExpiration();

  const { isOwnerNameCompleted, ownerName, ownerNameError, handleOwnerNameChange } = useChangeOwnerName();

  const { isCVCNumberCompleted, cvcNumber, cvcError, handleChangeCVCNumber } = useChangeCVCNumber();

  const { cardPassword, cardPasswordError, handleChangePassword } = useChangePassword();

  const isCardNumberError = cardNumberError.errorConditions.some((errorCondition) => errorCondition === true);

  const isMountButton =
    cardNumbers.length === 4 &&
    !isCardNumberError &&
    cardBrand !== '' &&
    !isDropdownOpen &&
    (expiration.month + expiration.year).length === 4 &&
    !expirationError.isError &&
    ownerName.length > 1 &&
    !ownerNameError.isError &&
    cvcNumber.length === 3 &&
    !cvcError.isError &&
    cardPassword.length === 2 &&
    !cardPasswordError.isError;

  return (
    <>
      <PreviewCreditCardStyleContainer>
        <PreviewCreditCard
          isCardBrandChange={cardBrand !== ''}
          cardBrand={cardBrand}
          cardNumbers={cardNumbers}
          expiration={expirationError.isError === true ? initialExpiration : expiration}
          ownerName={ownerName}
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
        {isOwnerNameCompleted && (
          <CVCNumberTextField cvcNumber={cvcNumber} cvcError={cvcError} onAddCVCNumber={handleChangeCVCNumber} />
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
        <Button isFloating onClick={() => {}} size="large">
          확인
        </Button>
      )}
    </>
  );
};

export default CreditCardForm;
