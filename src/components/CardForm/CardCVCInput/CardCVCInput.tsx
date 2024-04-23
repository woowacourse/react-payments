import { useState } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

const CardCVCInput = () => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div>
      <TitleContainer title="CVC 번호를 입력해 주세요" />
      <InputField label="CVC" inputCount={1} errorMessage={errorMessage}>
        <Input isValid={true} type="text" placeholder="123" maxLength={3} />
      </InputField>
    </div>
  );
};

export default CardCVCInput;
