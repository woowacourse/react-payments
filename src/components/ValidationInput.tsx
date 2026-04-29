import { useState, type ChangeEvent, type ComponentProps } from 'react';

interface ValidationInputProps extends ComponentProps<'input'> {
  validations: { type: 'limit' | 'check'; pattern: RegExp; message: string }[];
}

export default function ValidationInput({ validations, onChange, onBlur, ...props }: ValidationInputProps) {
  const [inputError, setInputError] = useState<null | Error>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const failedValidation = validations.find(
      (validation) => validation.type === 'limit' && !validation.pattern.test(event.target.value),
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
        validation.type === 'check' && typeof props.value === 'string' && !validation.pattern.test(props.value),
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
