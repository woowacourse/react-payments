import { useRef, useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import { validateCVC } from "../../domain/validate";

type CVCInputProps = {
  CVC: string;
  setCVC: React.Dispatch<React.SetStateAction<string>>;
};

const CVCInput = ({CVC, setCVC}: CVCInputProps) => {
  const [helperText, setHelperText] = useState("");
  const inputRef = useRef<(HTMLElement | null)>(null);

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
    <InputContainer title="CVC 번호를 입력해 주세요">
      <label className='label'>CVC</label>
      <div className="inputContainer">
      <input name="cvc" placeholder="123" value={CVC} onChange={handleCVC} ref={(element) => {inputRef.current = element}} className={`input ${helperText !== "" && 'errorInput'}`} maxLength={3}/>
      </div>
      <p className="helperText">{helperText}</p>
    </InputContainer>
  );
};

export default CVCInput;
