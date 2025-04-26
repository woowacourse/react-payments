import { useInputField } from '../../hooks/useCardInputHooks';
import { validateCvcNumber } from '../../utils/cardValidation';
import CVCNumberInputView from './CVCNumberInputView';

const CvcNumberInput = () => {
  const [fieldState, handleFieldChange] = useInputField(
    '',
    '123',
    3,
    validateCvcNumber
  );

  return (
    <CVCNumberInputView
      cvcNumberInfo={fieldState}
      handleInputChange={handleFieldChange}
    />
  );
};

export default CvcNumberInput;
