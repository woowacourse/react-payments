import { useRef, useState } from "react"; 
import InputContainer from "../InputContainer/InputContainer"; 
import { validateCardNumbers, validateFirstCardNumbers } from "../../domain/validate"; 
import CustomCardNumbersError from "../../error/CustomCardNumbersError";

type CardNumbersInputProps = {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
};

const CardNumbersInput = ({cardNumbers, setCardNumbers}:CardNumbersInputProps) => { 
  const [helperText, setHelperText] = useState<string>('');
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLElement | null)[]>([]);

  const handleChange = (index: number) => 
    (e: React.ChangeEvent<HTMLInputElement>) => { 
        try { 
            const newCardNumbers = [...cardNumbers]; 
            newCardNumbers[index] = e.target.value; 
            setCardNumbers(newCardNumbers); 
            
            validateFirstCardNumbers(newCardNumbers[0])
            validateCardNumbers(newCardNumbers, 4); 
            if (helperText !== '') {
              inputRefs.current[index]?.focus();
            }
            setHelperText('');
            setErrorIndex(null);
        } catch (error: unknown) { 
            if(error instanceof CustomCardNumbersError) {
              if(error.message === '유효하지 않은 카드번호입니다.') {
                inputRefs.current[0]?.focus();
                setErrorIndex(0);
              }
              else {
                inputRefs.current[error.index]?.focus();
                setErrorIndex(error.index);
              }
                setHelperText(error.message);
            }
        }
    };

  return (
    <InputContainer
      title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다."
    >
      <label className='label'>카드 번호</label>
      <div className="inputContainer">
        {cardNumbers.map((value, index) => (
          <input
            key={index}
            placeholder="1234"
            name={`card${index + 1}`}
            value={value}
            onChange={handleChange(index)}
            ref={(element) => {inputRefs.current.push(element)}}
            className={`input ${index===errorIndex && 'errorInput'}`}
            maxLength={4}
          />
        ))}
      </div>
      <p className={`helperText`}>{helperText}</p>
    </InputContainer>
  );
};

export default CardNumbersInput;
