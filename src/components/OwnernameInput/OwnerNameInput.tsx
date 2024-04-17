import React, { useEffect, useState } from 'react';
import Field from '../common/Field/Field';
import Input from '../common/Input/Input';

interface OwnerName {
  ownerName: string;
}

const OwnerNameInput = () => {
  const [ownerName, setOwnerName] = useState<OwnerName>({ ownerName: '' });
  const [isError, setIsError] = useState<Record<keyof OwnerName, boolean>>({
    ownerName: false,
  });
  const [errMsg, setErrMsg] = useState('');

  const isCharacter = (value: string) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(value);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (value !== '' && !isCharacter(value)) {
      setErrMsg('알파벳만 입력 가능합니다.');
      setIsError({ ...isError, [name]: true });
      return;
    }
    setErrMsg('');
    setIsError({ ...isError, [name]: false });

    setOwnerName({ ...ownerName, [name]: value.toUpperCase() });
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setOwnerName({ ...ownerName, [name]: value.trim() });
  };

  return (
    <Field
      title="카드 소유자 이름을 입력해 주세요"
      labelText="소유자 이름"
      errMsg={errMsg}
    >
      {Object.keys(ownerName).map((name) => (
        <Input
          key={name}
          name={name as keyof OwnerName}
          placeholder="JOHN DOE"
          value={ownerName[name as keyof OwnerName]}
          isError={isError[name as keyof OwnerName]}
          isRequired={true}
          handleChange={onChange}
          handleOnBlur={onBlur}
        ></Input>
      ))}
    </Field>
  );
};

export default OwnerNameInput;
