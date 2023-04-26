import { FocusEvent, useState } from 'react';
import { isElementOfType } from '../utils/eventUtils';

interface useErrorProps {
  validator: CallableFunction;
  handleValidationChange: CallableFunction;
  inputs?: string[];
}

const useError = ({ validator, handleValidationChange, inputs }: useErrorProps) => {
  const [isError, setIsError] = useState(false);

  const onErrorBlur = (event: FocusEvent<HTMLElement>) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;

    const isSingleInput = !inputs && isElementOfType<HTMLInputElement>(event);
    const isValid = isSingleInput ? validator(event.target.value) : validator(inputs);

    if (isValid) {
      setIsError(false);
      handleValidationChange(event.target.dataset.name, true);
    }

    if (!isValid) {
      setIsError(true);
      handleValidationChange(event.target.dataset.name, false);
    }
  };

  return [isError, onErrorBlur] as const;
};

export { useError };
