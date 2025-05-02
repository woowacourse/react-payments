import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import useCvcNumber from '../../hooks/useCVC';

const CVCInput = () => {
  const { CVC, error, validate } = useCvcNumber();

  return (
    <InputContainer title={INPUT_CONTAINER.CVC.TITLE}>
      <h4 className="label">CVC</h4>
      <div className="inputContainer">
        <input
          name="cvc"
          placeholder="123"
          value={CVC}
          onChange={(e) => validate(e.target.value)}
          className={`input ${error.isValid ? 'errorInput' : ''}`}
          maxLength={CARD_VALIDATION_INFO.CVC_MAX_LENGTH}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {error.errorMessage}
      </p>
    </InputContainer>
  );
};

export default CVCInput;
