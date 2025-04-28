import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import { useCardFormContext } from '../../context/CardFormContext';

const CVCInput = () => {
  const { CVC, updateCVC, CVCErrors, CVCErrorMessage } = useCardFormContext();

  return (
    <InputContainer title={INPUT_CONTAINER.CVC.TITLE}>
      <h4 className="label">CVC</h4>
      <div className="inputContainer">
        <input
          name="cvc"
          placeholder="123"
          value={CVC}
          onChange={updateCVC}
          className={`input ${CVCErrors ? 'errorInput' : ''}`}
          maxLength={CARD_VALIDATION_INFO.CVC_MAX_LENGTH}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {CVCErrorMessage}
      </p>
    </InputContainer>
  );
};

export default CVCInput;
