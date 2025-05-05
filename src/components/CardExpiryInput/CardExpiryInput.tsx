import { useCardContext } from "../../contexts/CardContext";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_VALIDATION_INFO } from "../../constants/cardValidationInfo";
import InputContainer from "../InputContainer/InputContainer";
import Input from "../Input/Input";

const CardExpiryInput = () => {
  const { formValues, formErrors, handleDate, expiryInputRefs } =
    useCardContext();

  return (
    <InputContainer
      title={INPUT_CONTAINER.EXPIRE.TITLE}
      subTitle={INPUT_CONTAINER.EXPIRE.SUBTITLE}
    >
      <label htmlFor="" className="label">
        유효기간
      </label>
      <div className="inputContainer">
        <Input
          type="text"
          name="month"
          placeholder="MM"
          value={formValues.expirationDate.month}
          onChange={handleDate}
          ref={(element) => {
            expiryInputRefs.current[0] = element;
          }}
          error={formErrors.expiry.index === 0}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
          autoFocus
        />
        <Input
          type="text"
          name="year"
          placeholder="YY"
          value={formValues.expirationDate.year}
          onChange={handleDate}
          ref={(element) => {
            expiryInputRefs.current[1] = element;
          }}
          error={formErrors.expiry.index === 1}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
        />
      </div>
      <p className="helperText">{formErrors.expiry.message}</p>
    </InputContainer>
  );
};

export default CardExpiryInput;
