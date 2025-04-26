import { useMultipleInputFields } from '../../hooks/useCardInputHooks';
import { isNumeric, isValidSegment } from '../../utils/cardValidation';
import NumberInputsView from './NumberInputsView';

interface NumberInputsProps {
  numbers: string[];
  handleNumbersChange: (newNumbers: string[]) => void;
}

const NumberInputs = ({ numbers, handleNumbersChange }: NumberInputsProps) => {
  const placeholders = numbers.map(() => '1234');

  const validateNumberSegment = (
    value: string,
    _index: number,
    maxLength: number
  ) => {
    const isValidValue = isNumeric(value) && isValidSegment(value, maxLength);
    return {
      isValid: isValidValue,
      errorMessage: isValidValue ? '' : '숫자만 입력 가능합니다.',
    };
  };

  const [fieldStates, handleFieldChange] = useMultipleInputFields(
    numbers,
    placeholders,
    4,
    validateNumberSegment,
    handleNumbersChange
  );

  return (
    <NumberInputsView
      numbersInfo={fieldStates}
      handleInputChange={handleFieldChange}
    />
  );
};

export default NumberInputs;
