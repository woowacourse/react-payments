import { useCardContext } from "../../contexts/CardContext";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_VALIDATION_INFO } from "../../constants/CardValidationInfo";
import InputContainer from "../InputContainer/InputContainer";
import Input from "../Input/Input";
import { useEffect } from "react";

const CardExpiryInput = () => {
  const {
    month,
    year,
    handleDate,
    expiryHelperText,
    expiryErrorIndex,
    expiryInputRefs,
  } = useCardContext();

  useEffect(() => {
    expiryInputRefs.current[0]?.focus();
  }, []);

  return (
    <InputContainer
      title={INPUT_CONTAINER.EXPIRE.TITLE}
      subTitle={INPUT_CONTAINER.EXPIRE.SUBTITLE}
    >
      <label htmlFor="" className="label">
        유효기간
      </label>
      <div className={`inputContainer`}>
        <Input
          type="text"
          name="month"
          placeholder="MM"
          value={month}
          onChange={handleDate}
          ref={(element) => {
            expiryInputRefs.current[0] = element;
          }}
          error={expiryErrorIndex === 0}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
        />
        <Input
          type="text"
          name="year"
          placeholder="YY"
          value={year}
          onChange={handleDate}
          ref={(element) => {
            expiryInputRefs.current[1] = element;
          }}
          error={expiryErrorIndex === 0}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
        />
      </div>
      <p className="helperText">{expiryHelperText}</p>
    </InputContainer>
  );
};

export default CardExpiryInput;
