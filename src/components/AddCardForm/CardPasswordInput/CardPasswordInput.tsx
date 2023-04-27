import { useContext, useRef } from 'react';
import { checkValidPassword } from '../validators';
import { CardInfoContext } from '../../../CardInfoProvider';
import LabeledInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';
import MockPasswordInput from './MockPasswordInput/MockPasswordInput';
import useInputUpdater from '../../../hooks/useInputUpdater';

const CardPasswordInput = () => {
  const { setCardPassword } = useContext(CardInfoContext);
  const { inputValue, errorMessage, setInputValueWithValidation } = useInputUpdater({
    validator: checkValidPassword,
    contextSetter: setCardPassword,
  });

  const secondDigitRef = useRef<HTMLInputElement>(null);

  const updateDigit = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const digit = event.target.value;

    if (index === 1 && digit.length === 1) {
      secondDigitRef.current?.focus();
    }

    if (index === 1) {
      setInputValueWithValidation(`${digit}${inputValue[1] ?? ''}`);
      return;
    }

    setInputValueWithValidation(`${inputValue[0] ?? ''}${digit}`);
  };

  return (
    <LabeledInput title="카드 비밀번호" errorMessage={errorMessage}>
      <Input
        width="15%"
        value={inputValue[0] ?? ''}
        maxLength={1}
        onChange={event => updateDigit(1, event)}
        required={true}
        name="cardPasswordFirstLetter"
        type="password"
      />
      <Input
        width="15%"
        value={inputValue[1] ?? ''}
        maxLength={1}
        onChange={event => updateDigit(2, event)}
        ref={secondDigitRef}
        required={true}
        name="cardPasswordSecondLetter"
        type="password"
      />
      <MockPasswordInput />
      <MockPasswordInput />
    </LabeledInput>
  );
};

export default CardPasswordInput;
