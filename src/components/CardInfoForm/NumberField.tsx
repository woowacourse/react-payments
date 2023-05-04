import Input from '../common/Input';
import TextField from '../common/TextField';
import { CardFormNumberFieldProps } from './types';

import useCardFormValue from '../../hooks/useCardFormValue';
import useInputError from '../../hooks/useInputError';
import { useMemo } from 'react';

const NumberField = ({
  handleNumberChange,
  inputRefs,
}: CardFormNumberFieldProps) => {
  const { number } = useCardFormValue();

  const [isFirstNumberError, handleFirstNumberFocus, handleFirstNumberBlur] =
    useInputError();
  const [isSecondNumberError, handleSecondNumberFocus, handleSecondNumberBlur] =
    useInputError();
  const [isThirdNumberError, handleThirdNumberFocus, handleThirdNumberBlur] =
    useInputError();
  const [isFourthNumberError, handleFourthNumberFocus, handleFourthNumberBlur] =
    useInputError();

  const isError = useMemo(
    () =>
      isFirstNumberError ||
      isSecondNumberError ||
      isThirdNumberError ||
      isFourthNumberError,
    [
      isFirstNumberError,
      isSecondNumberError,
      isThirdNumberError,
      isFourthNumberError,
    ],
  );

  return (
    <TextField label="카드 번호" size="fit" isError={isError}>
      <Input
        type="text"
        name="number"
        inputMode="numeric"
        minLength={4}
        maxLength={4}
        required
        tabIndex={1}
        value={number.first}
        onChange={handleNumberChange}
        onFocus={handleFirstNumberFocus}
        onBlur={handleFirstNumberBlur}
        ref={inputRefs[0]}
        placeholder="0000"
        align="center"
        data-property="first"
      />
      <span>-</span>
      <Input
        type="text"
        name="number"
        inputMode="numeric"
        minLength={4}
        maxLength={4}
        required
        tabIndex={2}
        value={number.second}
        onChange={handleNumberChange}
        onFocus={handleSecondNumberFocus}
        onBlur={handleSecondNumberBlur}
        ref={inputRefs[1]}
        placeholder="0000"
        align="center"
        data-property="second"
      />
      <span>-</span>
      <Input
        type="password"
        name="number"
        inputMode="numeric"
        minLength={4}
        maxLength={4}
        required
        tabIndex={3}
        value={number.third}
        onChange={handleNumberChange}
        onFocus={handleThirdNumberFocus}
        onBlur={handleThirdNumberBlur}
        ref={inputRefs[2]}
        placeholder="0000"
        align="center"
        data-property="third"
      />
      <span>-</span>
      <Input
        type="password"
        name="number"
        inputMode="numeric"
        minLength={4}
        maxLength={4}
        required
        tabIndex={4}
        value={number.fourth}
        onChange={handleNumberChange}
        onFocus={handleFourthNumberFocus}
        onBlur={handleFourthNumberBlur}
        ref={inputRefs[3]}
        placeholder="0000"
        align="center"
        data-property="fourth"
      />
    </TextField>
  );
};

export default NumberField;
