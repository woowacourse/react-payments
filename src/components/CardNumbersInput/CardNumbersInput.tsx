import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import { useCardNumbersValidation } from '../../hooks/useCardNumbersValidation';
import { useConfirmButton } from '../../hooks/confirmButtonContext';

type CardNumbersInputProps = {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
};

const CardNumbersInput = ({
  cardNumbers,
  setCardNumbers,
}: CardNumbersInputProps) => {
  const [isErrors, errorMessage, validate] = useCardNumbersValidation();
  const { checkInputsComplete, updateDisplayInputs } = useConfirmButton();

  const updateCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = e.target.value;
    setCardNumbers(newCardNumbers);
    validate(newCardNumbers, index);
    const isValid = newCardNumbers.every(
      (number) => number.length === CARD_VALIDATION_INFO.CARD_MAX_LENGTH
    );
    checkInputsComplete('cardNumbers', isValid);
    if (isValid) updateDisplayInputs('brand', true);
  };

  const isDisabled = (index: number) => {
    const errorIndex = isErrors.findIndex((error) => error === true);
    if (errorIndex === -1) return false;
    if (errorIndex < index) return true;
  };

  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_NUMBERS.TITLE}
      subTitle={INPUT_CONTAINER.CARD_NUMBERS.SUBTITLE}
    >
      <h4 className="label">카드 번호</h4>
      <div className="inputContainer">
        {cardNumbers.map((value, index) => (
          <input
            key={index}
            placeholder="1234"
            name={`card${index + 1}`}
            value={value}
            onChange={(e) => updateCardNumber(e, index)}
            className={`input ${isErrors[index] && 'errorInput'}`}
            maxLength={CARD_VALIDATION_INFO.CARD_MAX_LENGTH}
            disabled={isDisabled(index)}
          />
        ))}
      </div>
      <p className={`helperText`} data-testid="helper-text">
        {errorMessage}
      </p>
    </InputContainer>
  );
};

export default CardNumbersInput;
