import { useId, useRef, useState } from 'react';
import { isInputValidate, isIncompleteRange } from '../../utils/Validation';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';

interface Props {
  value: string[];
  setValue: (value: string[]) => void;
}

const getCardNumberError = (cardNumber: string): string => {
  if (cardNumber === '') return '';
  if (isIncompleteRange(cardNumber, 4)) return '필요한 자릿수를 모두 입력해주세요!'

  return '';
}

const CardNumberSection = ({ value, setValue }: Props) => {
  const [errors, setErrors] = useState<boolean[]>([false, false, false, false]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const cardNumberIds = useId();

  function handleOnChange(inputValue: string, index: number) {
    if (!isInputValidate(inputValue, 4)) return;

    const newValue = [...value];
    newValue[index] = inputValue;
    setValue(newValue);

    if (inputValue.length === 4 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  const handleOnBlur = (inputValue:string, index: number) => {
    const isError = getCardNumberError(inputValue) !== '';
    setErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = isError;
      return newErrors;
    });
  }

  const errorIndex = errors.findIndex((isError) => isError);
  const finalErrorMessage = errorIndex !== -1 ? getCardNumberError(value[errorIndex]) : '';
  
  return (
    <CommonSection
      title="결제할 카드 번호를 입력해주세요"
      description="본인 명의의 카드만 결제 가능합니다"
      label="카드 번호"
      errorMessage={finalErrorMessage}
      htmlFor={`${cardNumberIds}-0`}
    >
      {value.map((num, index) => (
        <NumberInput
          key={index}
          id={`${cardNumberIds}-${index}`}
          ref={(el) => {inputRefs.current[index] = el;}}
          value={num}
          onChange={(v) => handleOnChange(v, index)}
          onBlur={(v)=>handleOnBlur(v, index)}
          placeholder="1234"
          maxLength={4}
          isError={errors[index]}
        />
      ))}
    </CommonSection>
  );
};

export default CardNumberSection;
