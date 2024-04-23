import { useState } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

const CardPasswordInput = () => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div>
      <TitleContainer title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해 주세요." />
      <InputField label="비밀번호 앞 2자리" inputCount={1} errorMessage={errorMessage}>
        <Input isValid={true} type="password" placeholder="비밀번호를 입력하세요" maxLength={2} />
      </InputField>
    </div>
  );
};

export default CardPasswordInput;
