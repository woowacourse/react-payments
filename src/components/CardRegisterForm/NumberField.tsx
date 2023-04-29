import { ChangeEventHandler } from 'react';

import Input from '../common/Input';
import TextField from '../common/TextField';

import useCardFormValue from '../../hooks/useCardFormValue';

interface Props {
  handleNumberChange: ChangeEventHandler<HTMLInputElement>;
}

const NumberField = ({ handleNumberChange }: Props) => {
  const { number } = useCardFormValue();

  return (
    <TextField label="카드 번호" size="fit">
      <Input
        type="text"
        inputMode='numeric'
        minLength={4}
        maxLength={4}
        required
        tabIndex={1}
        value={number.first}
        onChange={handleNumberChange}
        //ref={inputRefs[0]}
        placeholder="0000"
        align="center"
        data-set-value="setFirstNumber"
      />
      <span>-</span>
      <Input
        type="text"
        inputMode='numeric'
        minLength={4}
        maxLength={4}
        required
        tabIndex={2}
        value={number.second}
        onChange={handleNumberChange}
        //ref={inputRefs[1]}
        placeholder="0000"
        align="center"
        data-set-value="setSecondNumber"
      />
      <span>-</span>
      <Input
        type="password"
        inputMode='numeric'
        minLength={4}
        maxLength={4}
        required
        tabIndex={3}
        value={number.third}
        onChange={handleNumberChange}
        //ref={inputRefs[2]}
        placeholder="0000"
        align="center"
        data-set-value="setThirdNumber"
      />
      <span>-</span>
      <Input
        type="password"
        inputMode='numeric'
        minLength={4}
        maxLength={4}
        required
        tabIndex={4}
        value={number.fourth}
        onChange={handleNumberChange}
        //ref={inputRefs[3]}
        placeholder="0000"
        align="center"
        data-set-value="setFourthNumber"
      />
    </TextField>
  );
};

export default NumberField;
