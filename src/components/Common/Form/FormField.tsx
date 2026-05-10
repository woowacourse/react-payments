import { ChangeEvent, FocusEvent, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import InputField from '../InputField/InputField';
import { validateNaN } from '../../../utils/validate';

interface Props {
  id: string;
  index: number;
  value: string;
  fieldMaxLength: number;
  validator: (
    value: string,
    index: number
  ) => {
    error: boolean;
    errorMessage: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  setErrorMessage: React.Dispatch<SetStateAction<string>>;
}

export default function FormField({
  id,
  index,
  value,
  fieldMaxLength,
  validator,
  onChange,
  placeholder,
  setErrorMessage,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNaN(e.target.value)) {
      setIsError(true);
      setErrorMessage('숫자만 입력 가능합니다.');
      return;
    }

    const { error, errorMessage } = validator(e.target.value, index);

    setIsError(error);
    setErrorMessage(errorMessage);

    onChange(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length === 0) return;

    const { errorMessage } = validator(e.target.value, index);
    setErrorMessage(errorMessage);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') setIsError(false);
    setErrorMessage('');
  };

  return (
    <Wrapper>
      <InputField
        isError={}
        id={id}
        type="text"
        maxLength={fieldMaxLength}
        inputMode="numeric"
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
