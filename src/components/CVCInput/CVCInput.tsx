import { useCardContext } from "../../contexts/CardContext";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_VALIDATION_INFO } from "../../constants/cardValidationInfo";
import InputContainer from "../InputContainer/InputContainer";
import Input from "../Input/Input";

const CVCInput = () => {
  const { formValues, formErrors, CVCInputRef, handleCVC } = useCardContext();

  return (
    <InputContainer title={INPUT_CONTAINER.CVC.TITLE}>
      <label className="label">CVC</label>
      <div className="inputContainer">
        <Input
          name="cvc"
          placeholder="123"
          value={formValues.CVC}
          onChange={handleCVC}
          ref={(element) => {
            CVCInputRef.current = element;
          }}
          error={formErrors.CVC !== ""}
          maxLength={CARD_VALIDATION_INFO.CVC_MAX_LENGTH}
          autoFocus
        />
      </div>
      <p className="helperText">{formErrors.CVC}</p>
    </InputContainer>
  );
};

export default CVCInput;
