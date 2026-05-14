import { isNumericString } from '@/core/utils/validator';
import { validateCvc } from '@/entities/card';

interface UseCvcHandlerProps {
  handleChange: (value: string) => void;
  onComplete?: () => void;
}

export const useCvcHandler = ({ handleChange, onComplete }: UseCvcHandlerProps) => {
  const handleInputChange = (value: string) => {
    if (value === '' || isNumericString(value)) handleChange(value);
    if (validateCvc(value)) onComplete?.();
  };

  return { handleInputChange };
};
