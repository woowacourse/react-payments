import { useCardContext } from "../../contexts/CardContext";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_VALIDATION_INFO } from "../../constants/cardValidationInfo";
import Input from "../Input/Input";
import InputContainer from "../InputContainer/InputContainer";

const CardNumbersInput = () => {
  const { formValues, formErrors, cardNumbersInputRefs, handleCardNumbers } =
    useCardContext();

  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_NUMBERS.TITLE}
      subTitle={INPUT_CONTAINER.CARD_NUMBERS.SUBTITLE}
    >
      <label className="label">카드 번호</label>
      <div className="inputContainer">
        {formValues.cardNumbers.map((value, index) => (
          <Input
            key={index}
            placeholder="1234"
            name={`card${index + 1}`}
            value={value}
            onChange={handleCardNumbers(index)}
            ref={(element) => {
              cardNumbersInputRefs.current[index] = element;
            }}
            error={index === formErrors.cardNumbers.index}
            maxLength={CARD_VALIDATION_INFO.CARD_MAX_LENGTH}
            autoFocus={index === 0}
          />
        ))}
      </div>
      <p className="helperText">{formErrors.cardNumbers.message}</p>
    </InputContainer>
  );
};

export default CardNumbersInput;
