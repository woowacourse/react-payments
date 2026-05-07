import { useRef, useState } from "react";
import { getCardBrand, getCardNumberArrayByBrand, getCardNumberError } from "../../utils/Validation";


interface Props {
  value: string[];
  setValue: (value: string[]) => void;
}

export const useCardNumber = ({value, setValue}: Props) => {
  const [errors, setErrors] = useState<boolean[]>([false, false, false, false]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const currentBrand = getCardBrand(value.join(''));
  const cardNumberArray = getCardNumberArrayByBrand(currentBrand);
    
  const handleOnChange = (inputValue: string, index: number) => {
    const isNumberOnly = /^[0-9]*$/.test(inputValue);
    if (!isNumberOnly) return false;

    const currentMaxLength = cardNumberArray[index];
    const slicedValue = inputValue.slice(0, currentMaxLength);

    let newValue = [...value];
    newValue[index] = slicedValue;

    const newBrand = getCardBrand(newValue.join(''));
    const newCardFormat = getCardNumberArrayByBrand(newBrand);

    // 현재 값과 새로 입력된 값으로 인해 브랜드가 달라진다면, 배열 길이를 가변적으로 변경시키고, 바뀌지 않은 칸의 데이터는 남겨둬야 함
    if (newValue.length !== newCardFormat.length) {
      newValue = newCardFormat.map((_, index) => newValue[index] || '');
    }

    setValue(newValue);
    
    // 각 칸의 최대길이에 마주쳤을 때만 포커스 이동
    if (inputValue.length === newCardFormat[index] && index < newCardFormat.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOnBlur = (inputValue: string, index: number) => {
    const isError = getCardNumberError(inputValue) !== '';
    setErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = isError;
      return newErrors;
    });
  };

  const errorIndex = errors.findIndex((isError) => isError);
  const finalErrorMessage = errorIndex !== -1 ? getCardNumberError(value[errorIndex]) : '';

  return {
    format: cardNumberArray,
    errors,
    inputRefs,
    handleOnChange,
    handleOnBlur,
    finalErrorMessage,
  };
};