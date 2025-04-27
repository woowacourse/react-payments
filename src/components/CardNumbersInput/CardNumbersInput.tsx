import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import { useCardFormContext } from '../../context/CardFormContext';

const CardNumbersInput = () => {
  const {
    cardNumbers,
    updateCardNumber,
    cardNumbersRef,
    cardNumbersErrors,
    cardNumbersErrorMessage,
  } = useCardFormContext();

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
            className={`input ${cardNumbersErrors[index] && 'errorInput'}`}
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
        {cardNumbersErrorMessage}
      </p>
    </InputContainer>
  );
};

export default CardNumbersInput;
