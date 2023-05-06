import { useContext, useEffect } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';
import { isValidMonth } from '../../utils/InputValidate';
import {
  ERROR_MESSAGE,
  INPUT_MAX_LENGTH,
  INPUT_REF_LENGTH,
} from '../../utils/Constants';
import {
  CardFormErrorValueContext,
  CardFormValueContext,
} from '../../context/CardFormContext';
import { useMultipleInput } from '../../hooks/useMultipleInput';

const ExpirationDateInput = () => {
  const { expirationDate, setExpirationDate } =
    useContext(CardFormValueContext);
  const { expirationDateError, setExpirationDateError } = useContext(
    CardFormErrorValueContext
  );

  const { value, errorMessage, handleChangeInput, inputRefs } =
    useMultipleInput(
      INPUT_REF_LENGTH.EXPIRATION_DATE_LENGTH,
      INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH
    );

  setExpirationDate(value);

  useEffect(() => {
    if (!expirationDate[0].length && !expirationDate[1].length) return;

    if (
      expirationDate[0].length < INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH ||
      expirationDate[1].length < INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH
    ) {
      setExpirationDateError(ERROR_MESSAGE.EXPIRATION_DATE_FORM);
      return;
    }

    if (
      expirationDate[0].length === INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH &&
      !isValidMonth(expirationDate[0])
    ) {
      setExpirationDateError(ERROR_MESSAGE.VALID_MONTH);
      return;
    }

    setExpirationDateError(errorMessage);
  }, [expirationDate, setExpirationDateError]);

  return (
    <InputGroup labelValue='만료일' errorMessage={expirationDateError}>
      <InputBox width='137px' isError={!!expirationDateError}>
        <Input
          placeholder='MM'
          ref={inputRefs[0]}
          value={expirationDate[0]}
          onChange={handleChangeInput(0)}
        />
        <InputSeparator color='var(--grey-color)' isActive>
          /
        </InputSeparator>
        <Input
          placeholder='YY'
          ref={inputRefs[1]}
          value={expirationDate[1]}
          onChange={handleChangeInput(1)}
        />
      </InputBox>
    </InputGroup>
  );
};

export default ExpirationDateInput;
