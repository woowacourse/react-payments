import { useNumbersContext } from '../../contexts/NumbersContext';
import NumberInputsView from './NumberInputsView';

const NumberInputs = () => {
  const { numberFields, handleNumbersChange, numberInputRefs } =
    useNumbersContext();

  return (
    <NumberInputsView
      numbersInfo={numberFields}
      handleInputChange={handleNumbersChange}
      numberInputRefs={numberInputRefs}
    />
  );
};

export default NumberInputs;
