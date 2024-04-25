import { useState, useRef, RefObject, useEffect } from 'react';
import validate from '../utils/validate';

type ValidateFn = {
  fn: (value: string) => boolean;
};

type UseInputProps = {
  validators: ValidateFn[];
  nextRef?: RefObject<HTMLInputElement>;
  nextStepHandler?: () => void;
  isValidCurrentStep: boolean;
  maxLength: number;
};

const useInput = ({
  validators,
  nextRef,
  nextStepHandler,
  maxLength,
  isValidCurrentStep,
}: UseInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toUpperCase();
    setIsError(false);

    if (!inputValue.length) {
      setInputValue('');
      setIsCompleted(false);
      return;
    }

    for (let validator of validators) {
      if (!validator.fn(inputValue)) {
        setIsError(true);
        setInputValue('');
        return;
      }
    }

    setInputValue(inputValue);

    if (inputValue.length === maxLength) {
      setIsCompleted(true);
      if (nextStepHandler && isValidCurrentStep) {
        nextStepHandler();
      }
    } else {
      setIsCompleted(false);
    }
  };

  const onEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (
        !isCompleted &&
        nextStepHandler &&
        !validate.isEmptyValue(inputValue) &&
        isValidCurrentStep
      ) {
        nextStepHandler();
        setIsCompleted(true);
      }
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setIsError(false);
    if (!inputValue) {
      setIsError(true);
      return;
    }
    if (
      !isCompleted &&
      nextStepHandler &&
      isValidCurrentStep &&
      !validate.isEmptyValue(inputValue)
    ) {
      nextStepHandler();
    }
    setIsCompleted(true);
  };

  useEffect(() => {
    if (isCompleted && ref && nextStepHandler && isValidCurrentStep) {
      nextStepHandler();
      ref.current?.blur();
    }
    if (isCompleted && nextRef) {
      nextRef.current?.focus();
    }
  }, [isCompleted]);

  return { inputValue, onChange, isError, onEnter, ref, onBlur };
};

export default useInput;
