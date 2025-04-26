import { useMultipleInputFields } from '../../hooks/useCardInputHooks';
import { isValidNumberSegment } from '../../utils/cardValidation';
import NumberInputsView from './NumberInputsView';

interface NumberInputsProps {
  handleNumbersChange: (newNumbers: string[]) => void;
}

const NUMBER_MAX_LENGTH = 4;

const NumberInputs = ({ handleNumbersChange }: NumberInputsProps) => {
  const initialNumbers = ['', '', '', ''];
  const placeholders = ['1234', '1234', '1234', '1234'];

  const [numbersInfo, handleFieldChange] = useMultipleInputFields(
    initialNumbers,
    placeholders,
    NUMBER_MAX_LENGTH,
    isValidNumberSegment,
    handleNumbersChange
  );

  return (
    <NumberInputsView
      numbersInfo={numbersInfo}
      handleInputChange={handleFieldChange}
    />
  );
};

export default NumberInputs;
