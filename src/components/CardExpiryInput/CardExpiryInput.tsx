import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import { useCardExpiryValidation } from '../../hooks/useExpiryInputValidation';
import { useConfirmButton } from '../../context/ConfirmButtonContext';
import { useCardFormContext } from '../../context/CardFormContext';
import { useRef } from 'react';

const CardExpiryInput = () => {
  const { month, setMonth, year, setYear } = useCardFormContext();
  const [isErrors, errorMessage, validate] = useCardExpiryValidation();
  const [isMonthError, isYearError] = isErrors;
  const { updateInputState, inputsState } = useConfirmButton();
  const expiryRef = useRef<HTMLInputElement[]>([]);

  const updateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'month') {
      setMonth(value);
    } else if (name === 'year') {
      setYear(value);
    }
    validate(name, value);
    const isMonthValid =
      (name === 'month' ? value : month).length ===
      CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH;
    const isYearValid =
      (name === 'year' ? value : year).length ===
      CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH;

    const isExpiryComplete = isMonthValid && isYearValid;

    updateInputState('expiry', { isComplete: isExpiryComplete });
    if (isExpiryComplete) {
      updateInputState('CVC', { isVisible: true });
    }
    if (e.target.value.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH) {
      expiryRef.current[1]?.focus();
    }
  };

  if (!inputsState.expiry.isVisible) {
    return;
  }
  return (
    <InputContainer
      title={INPUT_CONTAINER.EXPIRE.TITLE}
      subTitle={INPUT_CONTAINER.EXPIRE.SUBTITLE}
    >
      <h4 className="label">유효기간</h4>
      <div className={`inputContainer`}>
        <input
          type="text"
          name="month"
          placeholder="MM"
          value={month}
          onChange={updateDate}
          className={`input ${isMonthError ? 'errorInput' : ''}`}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
          ref={(element) => {
            if (element) {
              expiryRef.current[0] = element;
            }
          }}
        />
        <input
          type="text"
          name="year"
          placeholder="YY"
          value={year}
          onChange={updateDate}
          className={`input ${isYearError ? 'errorInput' : ''}`}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
          ref={(element) => {
            if (element) {
              expiryRef.current[1] = element;
            }
          }}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {errorMessage}
      </p>
    </InputContainer>
  );
};

export default CardExpiryInput;
