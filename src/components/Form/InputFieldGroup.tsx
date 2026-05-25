import styled from '@emotion/styled';
import InputField from '../Common/InputField/InputField';
import Label from '../Common/Label/Label';
import ErrorMessage from '../Common/ErrorMessage/ErrorMessage';
import { ValidatorResult } from '../../types';
import { isNonDigit } from '../../utils/validate';
import useInputFieldGroup from '../../hooks/useInputFieldGroup';

interface InputFieldGroupProps {
  id: string;
  label: string;
  placeholders: readonly string[];
  fieldMaxLengths: readonly number[];
  values: readonly string[];
  inputType?: 'text' | 'password';
  serverErrorMessage?: string;
  validator: (inputValue: string, index: number) => ValidatorResult;
  onChange: (value: string, index: number) => void;
  inputBlocker?: (value: string) => boolean;
}

export default function InputFieldGroup({
  id,
  label,
  placeholders,
  fieldMaxLengths,
  values,
  inputType = 'text',
  serverErrorMessage,
  validator,
  onChange,
  inputBlocker = isNonDigit,
}: InputFieldGroupProps) {
  const { errorMessage, isErrors, refCallback, handleInputFieldChange, handleFocus, handleBlur } =
    useInputFieldGroup({ values, fieldMaxLengths, validator, onChange, inputBlocker });

  return (
    <GroupContainer>
      <Label htmlFor={id}>{label}</Label>

      <InputFieldWrapper>
        {values.map((value, index) => (
          <InputField
            key={`${label}-${index}`}
            id={index === 0 ? id : `${id}-${index}`}
            isError={isErrors[index]}
            type={inputType}
            maxLength={fieldMaxLengths[index]}
            inputMode="numeric"
            autoComplete="off"
            ref={(el) => refCallback(el, index)}
            value={value}
            placeholder={placeholders[index]}
            onChange={(e) => handleInputFieldChange(e.target.value, index)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
          />
        ))}
      </InputFieldWrapper>

      <ErrorMessage>
        {serverErrorMessage || (errorMessage.trim().length > 0 && errorMessage)}
      </ErrorMessage>
    </GroupContainer>
  );
}

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
