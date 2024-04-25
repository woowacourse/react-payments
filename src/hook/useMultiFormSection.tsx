import { useState, useEffect } from 'react';
import useFocusNext from './useFocusNext';

interface UseMultiFormSectionProps {
  refs: React.MutableRefObject<HTMLInputElement[]>;
  initialValue: string[];
  regex: RegExp;
  errorMessage: string;
  maxLength?: number;
  dispatchCardInfo: (value: string[]) => void;
  setError: (error: string) => void;
  hasErrors: boolean[]
  setHasErrors: (hasErrors: boolean[]) => void;
  validate: (values: string[]) => void;
}

const useMultiFormSection = (props: UseMultiFormSectionProps) => {
  const { refs, initialValue, regex, errorMessage, maxLength, dispatchCardInfo, setError, hasErrors, setHasErrors, validate } = props

  const [values, setValues] = useState(initialValue);
  const { focusNext } = useFocusNext(refs);

  useEffect(() => {
    refs.current.forEach((element, index) => {
      element.onfocus = () => { resetIndexError(index) };
      element.onblur = () => { resetIndexError(index) };
    })

    return () => {
      refs.current.forEach((element) => {
        element.onfocus = null;
        element.onblur = null;
      });
    };
  }, [])

  const isAnyFocused = refs.current.some(element => element === document.activeElement);

  useEffect(() => {
    if (!isAnyFocused) {
      validate(values);
    }
  }, [isAnyFocused])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValues = [...values]

    const { value } = e.target;

    if (!regex.test(value) && value.length !== 0) {
      setError(errorMessage);
      newValues[index] = value.split('').filter(char => regex.test(char)).join('')
      setIndexError(index);
    } else {
      setError('');
      newValues[index] = value
      resetIndexError(index);
    }

    setValues(newValues);
    dispatchCardInfo(newValues);

    if (newValues[index].length === maxLength) {
      focusNext();
    }
    if (newValues.every(newValue => newValue.length === maxLength)) {
      const focusedRef = refs.current.find(element => document.activeElement === element)
      focusedRef?.blur();
    }
  };

  const setIndexError = (index: number) => {
    const newHasErrors = [...hasErrors]
    setError(errorMessage);
    newHasErrors[index] = true;
    setHasErrors(newHasErrors);
  }

  const resetIndexError = (index: number) => {
    const newHasErrors = [...hasErrors]
    setError('');
    newHasErrors[index] = false;
    setHasErrors(newHasErrors);
  }

  return { values, hasErrors, handleChange };
};

export default useMultiFormSection;
