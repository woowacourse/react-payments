import { useCardContext } from "../../contexts/CardContext";
import { useRef, useState } from "react";
import { validateCVC } from "../../domain/validate";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_VALIDATION_INFO } from "../../constants/CardValidationInfo";
import InputContainer from "../InputContainer/InputContainer";

const CVCInput = () => {
  const {CVC, setCVC} = useCardContext();
  const [helperText, setHelperText] = useState("");
  const inputRef = useRef<HTMLElement | null>(null);

  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setCVC(e.target.value);
      validateCVC(e.target.value, 3);
      setHelperText("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setHelperText(error.message);
        inputRef.current?.focus();
      }
    }
  };

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
            inputRef.current = element;
          }}
          className={`input ${helperText !== "" && "errorInput"}`}
          maxLength={CARD_VALIDATION_INFO.CVC_MAX_LENGTH}
        />
      </div>
      <p className="helperText">{helperText}</p>
    </InputContainer>
  );
};

export default CVCInput;
