import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import { useCVCValidation } from '../../hooks/useCVCValidation';
import { useConfirmButton } from '../../hooks/confirmButtonContext';

type CVCInputProps = {
  CVC: string;
  setCVC: React.Dispatch<React.SetStateAction<string>>;
};

const CVCInput = ({ CVC, setCVC }: CVCInputProps) => {
  const [isErrors, errorMessage, validate] = useCVCValidation();
  const { checkInputsComplete } = useConfirmButton();

  const updateCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCVC(value);
    validate(e.target.value);
    const isValid = value.length === CARD_VALIDATION_INFO.CVC_MAX_LENGTH;
    checkInputsComplete('CVC', isValid);
  };

  return (
    <InputContainer title={INPUT_CONTAINER.CVC.TITLE}>
      <h4 className="label">CVC</h4>
      <div className="inputContainer">
        <input
          name="cvc"
          placeholder="123"
          value={CVC}
          onChange={updateCVC}
          className={`input ${isErrors ? 'errorInput' : ''}`}
          maxLength={CARD_VALIDATION_INFO.CVC_MAX_LENGTH}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {errorMessage}
      </p>
    </InputContainer>
  );
};

export default CVCInput;
