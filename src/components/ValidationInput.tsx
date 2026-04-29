import { useState, type ChangeEvent, type ComponentProps } from 'react';

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
    <div>
      <input onChange={handleOnChange} onBlur={handleOnBlur} {...props} />
      {inputError && <p>{inputError.message}</p>}
    </div>
  );
}
