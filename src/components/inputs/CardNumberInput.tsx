import { useState } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';

const CardNumberInput = () => {
  const [inputs, setInputs] = useState(['', '', '', '']);

  const handleChangeInput =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      if (Number.isNaN(Number(value))) return;
      if (value.length > 4) return;

      const newInputs = [...inputs];
      newInputs[index] = value;

      setInputs(newInputs);
    };

  return (
    <InputGroup labelValue='카드 번호'>
      <InputBox>
        <Input value={inputs[0]} onChange={handleChangeInput(0)} />
        <InputSeparator>-</InputSeparator>
        <Input value={inputs[1]} onChange={handleChangeInput(1)} />
        <InputSeparator>-</InputSeparator>
        <Input
          value={inputs[2]}
          type='password'
          onChange={handleChangeInput(2)}
        />
        <InputSeparator>-</InputSeparator>
        <Input
          value={inputs[3]}
          type='password'
          onChange={handleChangeInput(3)}
        />
      </InputBox>
    </InputGroup>
  );
};

export default CardNumberInput;
