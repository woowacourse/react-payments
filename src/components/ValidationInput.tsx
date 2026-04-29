import { useState, type ChangeEvent, type ComponentProps } from 'react';

interface ValidationInputProps extends ComponentProps<'input'> {
  validations: { pattern: RegExp; message: string }[];
}

export default function ValidationInput({ validations, onChange, ...props }: ValidationInputProps) {
  const [inputError, setInputError] = useState<null | Error>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const failedValidation = validations.find((validation) => !validation.pattern.test(event.target.value));
    if (failedValidation) {
      setInputError(new Error(failedValidation.message));
      return;
    }

    setInputError(null);
    onChange?.(event);
  };

  return (
    <div>
      <input onChange={handleOnChange} {...props} />
      {inputError && <p>{inputError.message}</p>}
    </div>
  );
}
