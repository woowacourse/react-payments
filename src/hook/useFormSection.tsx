import { useEffect, useState } from 'react';

interface UseFormSectionProps {
  ref: React.MutableRefObject<HTMLInputElement>;
  value: string;
  validateWhenChange: (value: string) => { errorMessage: string, newValue: string }
  validateWhenBlur: (value: string) => { errorMessage: string, complete: boolean }
  blurCondition: (value: string) => boolean;
  updateCardInfo: (value: string) => void;
  onComplete: () => void
}

const useFormSection = (props: UseFormSectionProps) => {
  const { ref, value, validateWhenChange, validateWhenBlur, blurCondition, updateCardInfo, onComplete } = props
  const [error, setError] = useState('')

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('focus', () => setError(''))
      ref.current.addEventListener('blur', (e: FocusEvent) => {
        onBlur((e.target as HTMLInputElement).value);
      })
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('focus', () => setError(''))
        ref.current.removeEventListener('blur', (e: FocusEvent) => {
          onBlur((e.target as HTMLInputElement).value);
        })
      }
    }
  }, [])

  const onBlur = (value: string) => {
    const { errorMessage, complete } = validateWhenBlur(value);
    setError(errorMessage);
    if (complete) {
      onComplete();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { errorMessage, newValue } = validateWhenChange(value)
    setError(errorMessage);
    updateCardInfo(newValue);
  };

  useEffect(() => {
    if (blurCondition(value)) {
      ref.current.blur();
    }
  }, [value]);

  return { handleChange, error };
};


export default useFormSection;
