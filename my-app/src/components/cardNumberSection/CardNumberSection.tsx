import { useRef, useState } from 'react';
import { isInputValidate, isValidRange } from '../../utils/Validation';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';

interface Props {
  value: string[];
  setValue: (value: string[]) => void;
}

export default function CardNumberSection({ value, setValue }: Props) {
  const [errors, setErrors] = useState<boolean[]>([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  function handleOnChange(inputValue: string, index: number) {
    if (!isInputValidate(inputValue, 4)) return;

    const newValue = [...value];
    newValue[index] = inputValue;
    setValue(newValue);

    if (inputValue.length === 4 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleOnBlur(inputValue:string, index: number) {
    const newError = [...errors];

    if (!isValidRange(inputValue, 4)) {
      newError[index] = true;
      setErrorMessage('필요한 자릿수를 모두 입력해주세요!'); 
    } else {
      newError[index] = false;
      if(!newError.some((error) => error)) setErrorMessage('');
    }

    setErrors(newError);
    }
  

  return (
    <CommonSection
      title="결제할 카드 번호를 입력해주세요"
      description="본인 명의의 카드만 결제 가능합니다"
      label="카드 번호"
      errorMessage={errorMessage}
    >
      {value.map((num, index) => (
        <NumberInput
          key={index}
          ref={(el) => {inputRefs.current[index] = el;}}
          value={num}
          onChange={(v) => handleOnChange(v, index)}
          onBlur={(v)=>handleOnBlur(v, index)}
          placeholder="1234"
          isError={errors[index]}
        />
      ))}
    </CommonSection>
  );
}

