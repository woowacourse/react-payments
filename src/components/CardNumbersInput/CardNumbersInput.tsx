import { useCardContext } from "../../contexts/CardContext";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_VALIDATION_INFO } from "../../constants/CardValidationInfo";
import Input from "../Input/Input";
import InputContainer from "../InputContainer/InputContainer";

const CardNumbersInput = () => {
  const {
    cardNumbers,
    cardNumbersHelperText,
    cardNumbersErrorIndex,
    cardNumbersInputRefs,
    handleCardNumbers,
  } = useCardContext();

  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_NUMBERS.TITLE}
      subTitle={INPUT_CONTAINER.CARD_NUMBERS.SUBTITLE}
    >
      <label className="label">카드 번호</label>
      <div className="inputContainer">
        {cardNumbers.map((value, index) => (
          <Input
            key={index}
            placeholder="1234"
            name={`card${index + 1}`}
            value={value}
            onChange={handleCardNumbers(index)}
            ref={(element) => {
              cardNumbersInputRefs.current.push(element);
            }}
            error={index === cardNumbersErrorIndex}
            maxLength={CARD_VALIDATION_INFO.CARD_MAX_LENGTH}
          />
        ))}
      </div>
      <p className={`helperText`}>{cardNumbersHelperText}</p>
    </InputContainer>
  );
};

export default CardNumbersInput;
