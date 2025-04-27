import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import { useCardNumbersValidation } from '../../hooks/useCardNumbersValidation';
import { useCardFormContext } from '../../context/CardFormContext';
import { useConfirmButton } from '../../context/ConfirmButtonContext';
import { useRef } from 'react';

const CardNumbersInput = () => {
  const { cardNumbers, setCardNumbers } = useCardFormContext();
  const [isErrors, errorMessage, validate] = useCardNumbersValidation();
  const { updateInputState } = useConfirmButton();
  const cardNumbersRef = useRef<HTMLInputElement[]>([]);

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
    updateInputState('cardNumbers', { isComplete: isValid });
    if (isValid) updateInputState('brand', { isVisible: true });
    if (e.target.value.length === CARD_VALIDATION_INFO.CARD_MAX_LENGTH) {
      cardNumbersRef.current[index + 1]?.focus();
    }
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
            ref={(element) => {
              if (element) {
                cardNumbersRef.current[index] = element;
              }
            }}
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
