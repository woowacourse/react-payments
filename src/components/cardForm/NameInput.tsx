import styled from 'styled-components';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { useState } from 'react';

interface NameInputProps {
  name: string;
  setName: (name: string) => void;
}

const NameInput = ({ name, setName }: NameInputProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isNotInputEnglish(inputValue)) {
      setErrorMessage('영어만 입력해주세요');
      return;
    }
    if (isOverLength(inputValue)) {
      setErrorMessage('30자 이하로 입력해주세요');
      return;
    }

    setName(inputValue.toUpperCase());
    setErrorMessage('');
  };

  const isNotInputEnglish = (inputValue: string) => {
    const regExp = /^[a-zA-Z\s]*$/;
    return !regExp.test(inputValue);
  };

  const isOverLength = (inputValue: string) => {
    return inputValue.length > 30;
  };

  return (
    <InputGroup
      labelValue={<LabelValue length={name.length} />}
      errorMessage={errorMessage}
    >
      <InputBox isError={!!errorMessage}>
        <Input
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          textAlign='start'
          value={name}
          onChange={handleChangeInput}
        />
      </InputBox>
    </InputGroup>
  );
};

interface LabelValueProps {
  length: number;
}

const LabelValue = ({ length }: LabelValueProps) => {
  return (
    <LabelContainer>
      <p>카드 소유자 이름(선택)</p>
      <p>{length}/30</p>
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
`;
export default NameInput;
