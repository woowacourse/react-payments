import { useState } from 'react';
import styled from 'styled-components';
import Input from '../../Atoms/Input';

const InputWrapper = styled.div`
  border-bottom: 1.5px solid #737373;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

function NickNameInput() {
  const [nickName, setNickname] = useState('');
  const [validation, setValidation] = useState(false);

  const onNickNameChange = ({ target }) => {
    console.log(target.value);
  };

  return (
    <InputWrapper>
      <Input
        value={nickName}
        width="244px"
        height="22px"
        backgroundColor="white"
        maxLength={20}
        placeholder="카드 이름을 입력해주세요."
        onChange={onNickNameChange}
        isValid={validation}
      />
    </InputWrapper>
  );
}

export default NickNameInput;
