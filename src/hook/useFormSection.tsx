import { useEffect, useState } from 'react';

interface UseFormSectionProps {
  value: string;
  ref: React.MutableRefObject<HTMLInputElement>;
  regex: RegExp;
  errorMessage: string;
  maxLength?: number;
  dispatchCardInfo: (value: string) => void

}

const useFormSection = (props: UseFormSectionProps) => {
  const { value, ref, regex, errorMessage, maxLength, dispatchCardInfo } = props
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!regex.test(value) && value.length !== 0) {
      setError(errorMessage);
      e.target.value = (value.split('').filter(char => regex.test(char)).join(''));
    } else {
      setError('');
      dispatchCardInfo(value);
    }

  };

  useEffect(() => {
    if (value.length === maxLength) {
      setError('');
      ref.current.blur();
    }
  }, [value]);

  return { handleChange, error, setError };
};

export default useFormSection;
