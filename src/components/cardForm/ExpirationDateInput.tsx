import { useEffect, useRef } from 'react';
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
import type { CardItemInfo, InputProps } from '../../types/Card';

type ExpirationDateInputProps = InputProps<CardItemInfo['expirationDate']>;

const ExpirationDateInput = ({
  value,
  setValue,
  errorMessage,
  setErrorMessage,
}: ExpirationDateInputProps) => {
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    if (!value[0].length && !value[1].length) return;

    if (
      value[0].length < INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH ||
      value[1].length < INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH
    ) {
      setErrorMessage(ERROR_MESSAGE.EXPIRATION_DATE_FORM);
      return;
    }

    if (
      value[0].length === INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH &&
      !isValidMonth(value[0])
    ) {
      setErrorMessage(ERROR_MESSAGE.VALID_MONTH);
      return;
    }
  }, [value, setErrorMessage]);

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isOverLength(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH))
        return;
      if (isInputNumber(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH)) {
        setErrorMessage(ERROR_MESSAGE.ONLY_NUMBER);
        return;
      }

      const newInputs = [...value];
      newInputs[inputIndex] = inputValue;

      setValue(newInputs);

      if (
        isNextInputFocusable({
          inputValue,
          inputIndex,
          maxLength: INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH,
        })
      ) {
        const nextInputRef = refs.at(inputIndex + 1);
        if (nextInputRef?.current) {
          nextInputRef.current.focus();
        }
      }

      setErrorMessage('');
    };

  return (
    <InputGroup labelValue='만료일' errorMessage={errorMessage}>
      <InputBox width='137px' isError={!!errorMessage}>
        <Input
          placeholder='MM'
          ref={refs[0]}
          value={value[0]}
          onChange={handleChangeInput(0)}
        />
        <InputSeparator color='var(--grey-color)' isActive>
          /
        </InputSeparator>
        <Input
          placeholder='YY'
          ref={refs[1]}
          value={value[1]}
          onChange={handleChangeInput(1)}
        />
      </InputBox>
    </InputGroup>
  );
};

export default ExpirationDateInput;
