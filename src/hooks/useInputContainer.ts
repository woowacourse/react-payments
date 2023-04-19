import { ChangeEvent, FocusEvent, useState } from 'react';

interface useInputContainerProps {
  formatter: (input: string) => string;
  validator: (input: string) => boolean;
  onValidation: CallableFunction;
}

const useInputContainer = ({
  formatter,
  validator,
  onValidation: handleValidation,
}: useInputContainerProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(formatter(event.target.value));
  };

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    const isValid = validator(event.target.value);

    if (isValid) {
      setIsError(false);
      handleValidation(event.target.id, true);
    }

    if (!isValid) {
      setIsError(true);
      handleValidation(event.target.id, false);
    }
  };

  return { inputValue, handleInputChange, isError, handleInputBlur };
};

export { useInputContainer };
