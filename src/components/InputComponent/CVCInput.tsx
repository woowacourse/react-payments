import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, { useEffect, useRef } from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { CVC } from '../../types/card';
import { CVC_LIMIT } from '../../constants/system';

interface Props {
  CVC: CVC;
  handleInput: {
    handleUpdateCVCInput: (value: string) => void;
    handleUpdateCVCErrorMessages: (
      errorMessage: string,
      isError: boolean
    ) => void;
  };
}
export default function CVCInput({
  CVC,
  handleInput: { handleUpdateCVCInput, handleUpdateCVCErrorMessages },
}: Props) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);

  const errorMessages = Object.values(CVC.CVCField).map(
    (value) => value.errorMessage
  );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    info: string
  ) => {
    try {
      Validation[info]?.(e.target.value);
      handleUpdateCVCErrorMessages('', false);
      handleUpdateCVCInput(e.target.value);
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateCVCErrorMessages(error.message, true);
      }
    }
  };

  const checkInputError = () => {
    const cardKey = 'CVC' as keyof typeof CVC.CVCField;
    return CVC.CVCField[cardKey].isError;
  };

  return (
    <>
      <FieldTitle title='CVC 번호를 입력해 주세요' />
      <InputField
        label='CVC'
        count={1}
        errorMessages={errorMessages}
      >
        {Array.from({ length: CVC_LIMIT.TOTAL_FIELDS }).map((_, index) => (
          <Input
            key={index}
            type='string'
            maxLength={3}
            value={CVC.CVCField['CVC' as keyof typeof CVC.CVCField].value}
            placeholder={'123'}
            isError={checkInputError()}
            onChange={(e) => handleInputChange(e, 'CVC')}
            inputRef={(element: HTMLInputElement) => {
              inputRefs.current[index] = element;
            }}
          />
        ))}
      </InputField>
    </>
  );
}
