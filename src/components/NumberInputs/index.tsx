import { useCardForm } from '../../contexts/CardFormContext';
import NumberInputsView from './NumberInputsView';

const NumberInputs = () => {
  const { numberFields, handleNumberFieldChange, numberInputRefs } = useCardForm();

  return (
    <NumberInputsView
      numbersInfo={numberFields}
      handleInputChange={handleNumberFieldChange}
      numberInputRefs={numberInputRefs}
    />
  );
};

export default NumberInputs;
