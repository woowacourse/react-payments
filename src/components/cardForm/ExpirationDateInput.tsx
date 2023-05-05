import { useContext, useEffect, useRef } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';
import {
  isInputNumber,
  isNextInputFocusable,
  isOverLength,
  isValidMonth,
} from '../../utils/InputValidate';
import { ERROR_MESSAGE, INPUT_MAX_LENGTH } from '../../utils/Constants';
import {
  CardFormErrorValueContext,
  CardFormValueContext,
} from '../../context/CardFormContext';

const ExpirationDateInput = () => {
  const { expirationDate, setExpirationDate } =
    useContext(CardFormValueContext);
  const { expirationDateError, setExpirationDateError } = useContext(
    CardFormErrorValueContext
  );
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

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
  }, [expirationDate, setExpirationDateError]);

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isOverLength(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH))
        return;
      if (isInputNumber(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH)) {
        setExpirationDateError(ERROR_MESSAGE.ONLY_NUMBER);
        return;
      }

      const newInputs = [...expirationDate];
      newInputs[inputIndex] = inputValue;

      setExpirationDate(newInputs);

      if (
        isNextInputFocusable({
          inputValue,
          inputIndex,
          maxLength: INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH,
        })
      ) {
        const nextInputRef = inputRefs.at(inputIndex + 1);
        if (nextInputRef?.current) {
          nextInputRef.current.focus();
        }
      }

      setExpirationDateError('');
    };

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
