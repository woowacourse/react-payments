import { useRef, useState } from "react"; 
import InputContainer from "../InputContainer/InputContainer"; 
import { validateCardNumbers } from "../../domain/validate"; 

const TOTAL_INPUTS = 4;

const CardNumbersInput = () => { 
  const [cardNumbers, setCardNumbers] = useState<string[]>( 
    Array(TOTAL_INPUTS).fill("")
  );
  const [helperText, setHelperText] = useState<string>('');
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLElement | null)[]>([]);

  const handleChange = (index: number) => 
    (e: React.ChangeEvent<HTMLInputElement>) => { 
        try { 
            const { value, name } = e.target; 
            
            const newCardNumbers = [...cardNumbers]; 
            newCardNumbers[index] = e.target.value; 
            setCardNumbers(newCardNumbers); 
      
            validateCardNumbers(value, 4, name); 
            setHelperText('');
            setErrorIndex(null);
        } catch (error: unknown) { 
            if(error instanceof Error) {
                setHelperText(error.message);
                setErrorIndex(index);
                inputRefs.current[index]?.focus();
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
            className={`input ${index===errorIndex && 'errorInput'}`}
          />
        ))}
      </div>
      <p className={`helperText`}>{helperText}</p>
    </InputContainer>
  );
};

export default CardNumbersInput;
