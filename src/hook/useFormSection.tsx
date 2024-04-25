import { useState, useEffect } from 'react';

interface UseFormSectionProps {
  ref: React.MutableRefObject<HTMLInputElement>;
  initialValue: string;
  regex: RegExp;
  errorMessage: string;
  maxLength?: number;
  dispatchCardInfo: (value: string) => void
  setError: (error: string) => void
}

const useFormSection = (props: UseFormSectionProps) => {
  const { ref, initialValue, regex, errorMessage, maxLength, dispatchCardInfo, setError } = props

  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!regex.test(value) && value.length !== 0) {
      setError(errorMessage);
      setValue(value.slice(0, -1));
    } else {
      setError('');
      setValue(value);
    }

    dispatchCardInfo(value);
  };

  useEffect(() => {
    if (value.length === maxLength) {
      setError('');
      ref.current.blur();
    }
  }, [value]);

  return { value, handleChange };
};

export default useFormSection;
