import { useCardContext } from "../../contexts/CardContext";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_VALIDATION_INFO } from "../../constants/cardValidationInfo";
import InputContainer from "../InputContainer/InputContainer";
import Input from "../Input/Input";
import { useEffect } from "react";

const CVCInput = () => {
  const { CVC, CVCHelperText, CVCInputRef, handleCVC } = useCardContext();

  useEffect(() => {
    CVCInputRef.current?.focus();
  }, []);

  return (
    <InputContainer title={INPUT_CONTAINER.CVC.TITLE}>
      <label className="label">CVC</label>
      <div className="inputContainer">
        <Input
          name="cvc"
          placeholder="123"
          value={CVC}
          onChange={handleCVC}
          ref={(element) => {
            CVCInputRef.current = element;
          }}
          error={CVCHelperText !== ""}
          maxLength={CARD_VALIDATION_INFO.CVC_MAX_LENGTH}
        />
      </div>
      <p className="helperText">{CVCHelperText}</p>
    </InputContainer>
  );
};

export default CVCInput;
