import { useCvcContext } from '../../contexts/CvcContext';
import CVCNumberInputView from './CVCNumberInputView';

const CVCNumberInput = () => {
  const { cvcField, handleCvcChange, cvcInputRef } = useCvcContext();
  return (
    <CVCNumberInputView
      cvcNumberInfo={cvcField}
      handleInputChange={handleCvcChange}
      inputRef={cvcInputRef}
    />
  );
};

export default CVCNumberInput;
