import { CardFormFiledType } from '@/components/features/CardFormFiled/CardFormFiled.types';
import { useState } from 'react';

const ExpireDateIndex = {
  MONTH: 0,
  YEAR: 1,
};

export type CardInputType = {
  value: string;
  isValid: boolean;
};

const currentYear = new Date().getFullYear().toString().slice(-2);

export const useCardInput = (type: CardFormFiledType, arrLength: number, valueLength: number) => {
  const [value, setValue] = useState<CardInputType[]>(
    Array.from({ length: arrLength }, () => ({ value: '', isValid: true }))
  );
  const [errorMessage, setErrorMessage] = useState<string>('숫자를 입력하세요.');

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => {
      const newArr = [...prev];
      newArr[index].value = e.target.value;
      return newArr;
    });
  };

  const validateInput = (value: string, index: number) => {
    if (value.length < valueLength) {
      setErrorMessage(`${valueLength}자리의 숫자를 입력하셔야 합니다.`);
      return false;
    }

    if (!new RegExp(`^\\d{${valueLength}}$`).test(value)) {
      setErrorMessage('숫자를 입력하세요.');
      return false;
    }

    if (type === 'expireDate') {
      if (index === ExpireDateIndex.MONTH && (parseInt(value) < 1 || parseInt(value) > 12)) {
        setErrorMessage('월을 잘못 입력했습니다.');
        return false;
      }

      if (index === ExpireDateIndex.YEAR && parseInt(value) < parseInt(currentYear)) {
        setErrorMessage('만료 년도는 현재 년도보다 낮을 수 없습니다.');
        return false;
      }
    }

    return true;
  };

  const handleBlur = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValidate = validateInput(inputValue, index);

    setValue((prev) => {
      const newArr = [...prev];
      newArr[index].isValid = isValidate;
      return newArr;
    });
  };

  return { value, errorMessage, handleChange, handleBlur };
};
