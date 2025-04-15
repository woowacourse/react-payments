import { useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import { validateCVC } from "../../domain/validate";
import styles from './CVCInput.module.css'

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
      <label className='label'>CVC</label>
      <div className="inputContainer">
      <input name="cvc" placeholder="123" value={CVC} onChange={handleCVC} className={`input`}/>
      </div>
      <p className="helperText">{helperText}</p>
    </InputContainer>
  );
};

export default CVCInput;
