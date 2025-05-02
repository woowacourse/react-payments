import InputContainer from '../InputContainer/InputContainer';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import useExpiryDate from '../../hooks/useExpiry';
import { useRef } from 'react';

const CardExpiryInput = () => {
  const { date, error, validate } = useExpiryDate();
  const expiryRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleExpiryDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    dateName: string
  ) => {
    const { value } = e.target;
    validate(value, dateName);
    if (value.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH) {
      expiryRef.current[1]?.focus();
    }
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
          value={date.month}
          onChange={(e) => handleExpiryDate(e, 'month')}
          className={`input ${error[0].isValidate ? 'errorInput' : ''}`}
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
          value={date.year}
          onChange={(e) => handleExpiryDate(e, 'year')}
          className={`input ${error[1].isValidate ? 'errorInput' : ''}`}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
          ref={(element) => {
            if (element) {
              expiryRef.current[1] = element;
            }
          }}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {error.find((error) => error.errorMessage !== '')?.errorMessage ?? ''}
      </p>
    </InputContainer>
  );
};

export default CardExpiryInput;
