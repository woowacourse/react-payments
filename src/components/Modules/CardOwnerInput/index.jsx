import { useState } from 'react';
import InputLabel from '../../Atoms/InputLabel';
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
    <div>
      <InputLabel>카드 소유자 이름(선택)</InputLabel>
      <br />
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
    </div>
  );
}

export default CardOwnerInput;
