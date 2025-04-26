import { useCardForm } from '../../contexts/CardFormContext';
import NumberInputsView from './NumberInputsView';

const NumberInputs = () => {
  const { numberFields, handleNumberFieldChange } = useCardForm();

  return (
    <NumberInputsView
      numbersInfo={numberFields}
      handleInputChange={handleNumberFieldChange}
    />
  );
};

export default NumberInputs;
