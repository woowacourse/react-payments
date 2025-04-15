import { useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import { validateCVC } from "../../domain/validate";

const CVCInput = () => {
  const [CVC, setCVC] = useState("");
  const [helperText, setHelperText] = useState("");

  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setCVC(e.target.value);
      validateCVC(e.target.value, 3);
      setHelperText("");
    } catch (error: unknown) {
      if (error instanceof Error) setHelperText(error.message);
    }
  };
  return (
    <InputContainer title="CVC 번호를 입력해 주세요">
      <label>CVC</label>
      <input name="cvc" placeholder="123" value={CVC} onChange={handleCVC} />
      <p>{helperText}</p>
    </InputContainer>
  );
};

export default CVCInput;
