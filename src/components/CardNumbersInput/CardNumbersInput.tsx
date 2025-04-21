import { useCardContext } from "../../contexts/CardContext";
import InputContainer from "../InputContainer/InputContainer";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_VALIDATION_INFO } from "../../constants/CardValidationInfo";

const CardNumbersInput = () => {
  const { cardNumbers, cardNumbersHelperText, cardNumbersErrorIndex, cardNumbersInputRefs, handleCardNumbers } = useCardContext();

  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_NUMBERS.TITLE}
      subTitle={INPUT_CONTAINER.CARD_NUMBERS.SUBTITLE}
    >
      <label className="label">카드 번호</label>
      <div className="inputContainer">
        {cardNumbers.map((value, index) => (
          <input
            key={index}
            placeholder="1234"
            name={`card${index + 1}`}
            value={value}
            onChange={handleCardNumbers(index)}
            ref={(element) => {
              cardNumbersInputRefs.current.push(element);
            }}
            className={`input ${index === cardNumbersErrorIndex && "errorInput"}`}
            maxLength={CARD_VALIDATION_INFO.CARD_MAX_LENGTH}
          />
        ))}
      </div>
      <p className={`helperText`}>{cardNumbersHelperText}</p>
    </InputContainer>
  );
};

export default CardNumbersInput;
