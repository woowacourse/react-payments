import Input from '../common/Input';
import TextField from '../common/TextField';
import { CardFormNumberFieldProps } from './types';

import useCardFormValue from '../../hooks/useCardFormValue';

const NumberField = ({
  handleNumberChange,
  inputRefs,
}: CardFormNumberFieldProps) => {
  const { number } = useCardFormValue();

  return (
    <TextField label="카드 번호" size="fit">
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
        ref={inputRefs[3]}
        placeholder="0000"
        align="center"
        data-property="fourth"
      />
    </TextField>
  );
};

export default NumberField;
