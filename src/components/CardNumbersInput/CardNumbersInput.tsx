import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_NUMBER_RULE } from '../../constants/cardValidationRule';
import { useRef } from 'react';
import { useCardFormContext } from '../../context/CardFormContext';

const CardNumbersInput = () => {
  const {
    cardNumbers: { numbers, error, updateCardNumbers },
  } = useCardFormContext();
  const cardNumbersRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleCardNumbers = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    updateCardNumbers(e.target.value, index);
    if (e.target.value.length === CARD_NUMBER_RULE.MAX_LENGTH) {
      if (index < numbers.length - 1) {
        cardNumbersRef.current[index + 1]?.focus();
      }
    }
  };

  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_NUMBERS.TITLE}
      subTitle={INPUT_CONTAINER.CARD_NUMBERS.SUBTITLE}
    >
      <h4 className="label">카드 번호</h4>
      <div className="inputContainer">
        {numbers.map((number, index) => (
          <input
            key={index}
            placeholder="1234"
            name={`card${index + 1}`}
            value={number}
            onChange={(e) => handleCardNumbers(e, index)}
            className={`input ${error[index].isValidate && 'errorInput'}`}
            maxLength={CARD_NUMBER_RULE.MAX_LENGTH}
            ref={(element) => {
              if (element) {
                cardNumbersRef.current[index] = element;
              }
            }}
          />
        ))}
      </div>
      <p className={`helperText`} data-testid="helper-text">
        {error.find((error) => error.errorMessage !== '')?.errorMessage ?? ''}
      </p>
    </InputContainer>
  );
};

export default CardNumbersInput;
