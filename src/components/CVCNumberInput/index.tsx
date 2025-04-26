import { useInputField } from '../../hooks/useCardInputHooks';
import { validateCvcNumber } from '../../utils/cardValidation';
import CVCNumberInputView from './CVCNumberInputView';

const CVC_NUMBER_MAX_LENGTH = 3;

const CvcNumberInput = () => {
  const initialCvcNumber = '';
  const placeholder = '123';

  const [cvcNumberInfo, handleFieldChange] = useInputField(
    initialCvcNumber,
    placeholder,
    CVC_NUMBER_MAX_LENGTH,
    validateCvcNumber
  );

  return (
    <CVCNumberInputView
      cvcNumberInfo={cvcNumberInfo}
      handleInputChange={handleFieldChange}
    />
  );
};

export default CvcNumberInput;
