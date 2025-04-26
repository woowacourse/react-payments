import { useCardForm } from '../../contexts/CardFormContext';
import CVCNumberInputView from './CVCNumberInputView';

const CVCNumberInput = () => {
  const { cvcField, handleCvcFieldChange } = useCardForm();
  return (
    <CVCNumberInputView
      cvcNumberInfo={cvcField}
      handleInputChange={handleCvcFieldChange}
    />
  );
};

export default CVCNumberInput;
