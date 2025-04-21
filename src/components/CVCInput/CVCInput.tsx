import { useCardContext } from "../../contexts/CardContext";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_VALIDATION_INFO } from "../../constants/CardValidationInfo";
import InputContainer from "../InputContainer/InputContainer";

const CVCInput = () => {
  const { CVC, CVCHelperText, CVCInputRef, handleCVC } = useCardContext();

  return (
    <InputContainer title={INPUT_CONTAINER.CVC.TITLE}>
      <label className="label">CVC</label>
      <div className="inputContainer">
        <input
          name="cvc"
          placeholder="123"
          value={CVC}
          onChange={handleCVC}
          ref={(element) => {
            CVCInputRef.current = element;
          }}
          className={`input ${CVCHelperText !== "" && "errorInput"}`}
          maxLength={CARD_VALIDATION_INFO.CVC_MAX_LENGTH}
        />
      </div>
      <p className="helperText">{CVCHelperText}</p>
    </InputContainer>
  );
};

export default CVCInput;
