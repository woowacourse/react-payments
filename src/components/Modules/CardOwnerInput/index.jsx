import { useState } from 'react';
import LabeledInput from '../../Atoms/LabeledInput';
import Input from '../../Atoms/Input';
import validator from '../../../validation';

function CardOwnerInput() {
  const [name, setName] = useState('');
  const [validation, setValidation] = useState(false);

  const onNameChange = ({ target }) => {
    const name = target.value.toUpperCase();
    setName(name);
    updateValidation(name);
  };

  const updateValidation = name => {
    setValidation(validator.validateOwnerName(name));
  };

  return (
    <LabeledInput text="카드 소유자 이름(선택)">
      <Input
        value={name}
        width="318px"
        height="45px"
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={onNameChange}
        isCenter={false}
        isValid={validation}
      />
    </LabeledInput>
  );
}

export default CardOwnerInput;
