import { useState, type ChangeEvent, type ComponentProps } from 'react';
import styled from '@emotion/styled';
import Flex from './Flex';

const Input = styled.input`
  width: 100%;
  font-size: 13px;
  border-radius: 2px;
  padding: 8px 6px;
  border: 1px solid var(--color-border);

  :focus {
    border: 1px solid var(--color-black);
    outline: 0;
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-error);
  font-size: 12px;
  line-height: 14px;
  height: 14px;
  margin: 0;
`;

interface ValidationInputProps extends ComponentProps<'input'> {
  validations: { type: 'limit' | 'check'; validator: (input: string) => boolean; message: string }[];
}

export default function ValidationInput({ validations, onChange, onBlur, ...props }: ValidationInputProps) {
  const [inputError, setInputError] = useState<null | Error>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const failedValidation = validations.find(
      (validation) =>
        event.target.value.length && validation.type === 'limit' && !validation.validator(event.target.value),
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
        typeof props.value === 'string' &&
        props.value.length &&
        validation.type === 'check' &&
        !validation.validator(props.value),
    );

    if (failedValidation) {
      setInputError(new Error(failedValidation.message));
      return;
    }

    setInputError(null);
  };

  return (
    <Flex direction="column" gap={10}>
      <Input
        {...props}
        style={inputError ? { borderColor: 'var(--color-error)' } : {}}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
      {<ErrorMessage>{inputError?.message}</ErrorMessage>}
    </Flex>
  );
}
