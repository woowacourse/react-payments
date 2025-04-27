import { useCardForm } from '../../contexts/CardFormContext';
import CVCNumberInputView from './CVCNumberInputView';

const CVCNumberInput = () => {
  const { cvcField, handleCvcFieldChange, cvcInputRef } = useCardForm();
  return (
    <CVCNumberInputView
      cvcNumberInfo={cvcField}
      handleInputChange={handleCvcFieldChange}
      inputRef={cvcInputRef}
    />
  );
};

export default CVCNumberInput;
