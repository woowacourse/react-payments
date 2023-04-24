import { useState, useRef } from 'react';
import useValidator from '../../../hooks/useValidator';
import { checkValidPassword } from '../validators';
import CardInfoInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';
import MockPasswordInput from './MockPasswordInput/MockPasswordInput';

const CardPasswordInput = () => {
  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');
  const { value, isValid, errorMessage, setValueWithValidation } = useValidator(checkValidPassword);
  const secondDigitRef = useRef<HTMLInputElement>(null);

  const updateDigit = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const digit = event.target.value;

    if (index === 1 && digit.length === 1) {
      secondDigitRef.current?.focus();
    }

    if (index === 1) {
      setFirstDigit(() => {
        setValueWithValidation(`${digit}${secondDigit}`);
        return digit;
      });

      return;
    }

    setSecondDigit(() => {
      setValueWithValidation(`${firstDigit}${digit}`);
      return digit;
    });
  };

  return (
    <CardInfoInput title="카드 비밀번호" errorMessage={errorMessage}>
      <Input
        width="15%"
        value={firstDigit}
        maxLength={1}
        onChange={event => updateDigit(1, event)}
        required={true}
        type="password"
      />
      <Input
        width="15%"
        value={secondDigit}
        maxLength={1}
        onChange={event => updateDigit(2, event)}
        ref={secondDigitRef}
        required={true}
        type="password"
      />
      <MockPasswordInput />
      <MockPasswordInput />
    </CardInfoInput>
  );
};

export default CardPasswordInput;
