import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardInfoContext } from '../../contexts/CardInfoProvider';
import { cardSelectButtonInfos } from '../../pages/cardImages';
import {
  checkValidCardNumber,
  checkValidYearMonth,
  checkOwnerNameLength,
  checkValidCVC,
  checkValidPassword,
} from '../../domains/validators';
import styles from './AddCardForm.module.css';
import CardSwitchButton from './CardSwitchButton/CardSwitchButton';
import CardNumberInput from './CardNumberInput/CardNumberInput';
import ExpirationDateInput from './ExpirationDateInput/ExpirationDateInput';
import CardOwnerName from './CardOwnerName/CardOwnerName';
import CardSecurityCodeInput from './CardSecurityCodeInput/CardSecurityCodeInput';
import CardPasswordInput from './CardPasswordInput/CardPasswordInput';
import FooterButton from '../common/FooterButton/FooterButton';
import CardSelectButtonPack from '../CardSelectButtonPack/CardSelectButtonPack';

const AddCardForm = () => {
  const navigate = useNavigate();
  const {
    cardNumber,
    cardOwnerName,
    cardPassword,
    cardSecurityCode,
    cardExpirationDate,
    setCardNumber,
    setCardOwnerName,
    setCardPassword,
    setCardSecurityCode,
    setCardExpirationDate,
    setHasCheckedValidation,
  } = useContext(CardInfoContext);

  const isNextButtonLocked = [cardNumber, cardOwnerName, cardPassword, cardSecurityCode, cardExpirationDate].some(
    currentInputValue => !currentInputValue.isValid
  );

  const validateCardInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cardNumberInput = event.currentTarget.elements.namedItem('cardNumber');
    const expirationDateInput = event.currentTarget.elements.namedItem('expirationDate');
    const cardOwnerNameInput = event.currentTarget.elements.namedItem('cardOwnerName');
    const cardSecurityCodeInput = event.currentTarget.elements.namedItem('cardSecurityCode');
    const cardPasswordInputFirstLetter = event.currentTarget.elements.namedItem('cardPasswordFirstLetter');
    const cardPasswordInputSecondLetter = event.currentTarget.elements.namedItem('cardPasswordSecondLetter');

    if (
      !(
        cardNumberInput instanceof HTMLInputElement &&
        expirationDateInput instanceof HTMLInputElement &&
        cardOwnerNameInput instanceof HTMLInputElement &&
        cardSecurityCodeInput instanceof HTMLInputElement &&
        cardPasswordInputFirstLetter instanceof HTMLInputElement &&
        cardPasswordInputSecondLetter instanceof HTMLInputElement
      )
    ) {
      setHasCheckedValidation(false);
      return;
    }

    const cardPasswordValue = cardPasswordInputFirstLetter.value + cardPasswordInputSecondLetter.value;

    const validationResults = [
      checkValidCardNumber(cardNumberInput.value),
      checkValidYearMonth(expirationDateInput.value),
      checkOwnerNameLength(cardOwnerNameInput.value),
      checkValidCVC(cardSecurityCodeInput.value),
      checkValidPassword(cardPasswordValue),
    ];

    const isValidationSuccess = validationResults.every(validationResult => validationResult.result);

    if (!isValidationSuccess) {
      setHasCheckedValidation(false);
      return;
    }

    setCardNumber({ value: cardNumberInput.value, isValid: true });
    setCardExpirationDate({ value: cardExpirationDate.value, isValid: true });
    setCardOwnerName({ value: cardOwnerNameInput.value, isValid: true });
    setCardSecurityCode({ value: cardSecurityCode.value, isValid: true });
    setCardPassword({ value: cardPasswordValue, isValid: true });
    setHasCheckedValidation(true);

    navigate('/card-name-decision');
  };

  return (
    <form onSubmit={validateCardInfo} className={styles.container}>
      <CardSwitchButton
        top="90px"
        left="215px"
        modalContent={<CardSelectButtonPack width="290px" cardSelectButtonInfos={cardSelectButtonInfos} />}
      />
      <CardNumberInput />
      <ExpirationDateInput />
      <CardOwnerName />
      <CardSecurityCodeInput />
      <CardPasswordInput />
      <FooterButton title="다음" disabled={isNextButtonLocked} />
    </form>
  );
};

export default AddCardForm;
