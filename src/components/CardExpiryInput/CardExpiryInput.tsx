import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import { useCardFormContext } from '../../context/CardFormContext';

const CardExpiryInput = () => {
  const {
    month,
    year,
    updateDate,
    expiryRef,
    expireErrors,
    expireErrorMessage,
  } = useCardFormContext();
  const [isMonthError, isYearError] = expireErrors;

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
        {expireErrorMessage}
      </p>
    </InputContainer>
  );
};

export default CardExpiryInput;
