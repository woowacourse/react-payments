import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CVC_RULE } from '../../constants/cardValidationRule';
import { useCardFormContext } from '../../context/CardFormContext';

const CVCInput = () => {
  const {
    CVCNumber: { CVC, error, udpateCVC },
  } = useCardFormContext();

  return (
    <InputContainer title={INPUT_CONTAINER.CVC.TITLE}>
      <h4 className="label">CVC</h4>
      <div className="inputContainer">
        <input
          name="cvc"
          placeholder="123"
          value={CVC}
          onChange={(e) => udpateCVC(e.target.value)}
          className={`input ${error.isValid ? 'errorInput' : ''}`}
          maxLength={CVC_RULE.MAX_LENGTH}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {error.errorMessage}
      </p>
    </InputContainer>
  );
};

export default CVCInput;
