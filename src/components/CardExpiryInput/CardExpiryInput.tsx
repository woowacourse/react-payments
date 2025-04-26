import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import { useCardExpiryValidation } from '../../hooks/useExpiryInputValidation';
import { useConfirmButton } from '../../hooks/confirmButtonContext';

type CardExpiryInputProps = {
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
};

const CardExpiryInput = ({
  month,
  setMonth,
  year,
  setYear,
}: CardExpiryInputProps) => {
  const [isErrors, errorMessage, validate] = useCardExpiryValidation();
  const [isMonthError, isYearError] = isErrors;
  const { checkInputsComplete } = useConfirmButton();

  const updateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'month') {
      setMonth(value);
      const isValid =
        value.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH;
      checkInputsComplete('month', isValid);
    } else if (name === 'year') {
      setYear(value);
      const isValid =
        value.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH;
      checkInputsComplete('year', isValid);
    }
    validate(name, value);
  };

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
          disabled={isYearError}
        />
        <input
          type="text"
          name="year"
          placeholder="YY"
          value={year}
          onChange={updateDate}
          className={`input ${isYearError ? 'errorInput' : ''}`}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
          disabled={isMonthError}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {errorMessage}
      </p>
    </InputContainer>
  );
};

export default CardExpiryInput;
