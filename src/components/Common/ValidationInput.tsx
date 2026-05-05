import { useEffect, useState, type ChangeEvent, type ComponentProps } from 'react';
import styled from '@emotion/styled';
import Flex from './Flex';
import type { ValidationRule } from '../../types';

const Input = styled.input`
  width: 100%;
  font-size: 13px;
  border-radius: 2px;
  padding: 8px 6px;
  border: 1px solid var(--color-border);

  :focus {
    border-color: 1px solid var(--color-black);
    outline: 0;
  }

  &[data-is-error='true'] {
    border-color: var(--color-error);
  }
`;

interface ValidationInputProps extends ComponentProps<'input'> {
  validations: ValidationRule[];
  onChangeError?: (error: Error | null) => void;
}

export default function ValidationInput({
  validations,
  onChange,
  onBlur,
  onChangeError,
  ...props
}: ValidationInputProps) {
  const [inputError, setInputError] = useState<null | Error>(null);

  useEffect(() => {
    onChangeError?.(inputError);
  }, [inputError]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const failedValidation = validations.find(
      (validation) =>
        event.target.value.length && validation.type === 'onChange' && !validation.validator(event.target.value),
    );

    if (failedValidation) {
      setInputError(new Error(failedValidation.message));
      return;
    }

    setInputError(null);
    onChange?.(event);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    onBlur?.(event);

    const failedValidation = validations.find(
      (validation) =>
        typeof event.target.value === 'string' &&
        event.target.value.length &&
        validation.type === 'onBlur' &&
        !validation.validator(event.target.value),
    );

    if (failedValidation) {
      setInputError(new Error(failedValidation.message));
      return;
    }

    setInputError(null);
  };

  return (
    <Flex direction="column" gap={10}>
      <Input {...props} data-is-error={!!inputError} onChange={handleOnChange} onBlur={handleOnBlur} />
    </Flex>
  );
}
