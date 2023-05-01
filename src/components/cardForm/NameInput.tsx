import styled from 'styled-components';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { isInputEnglish, isOverLength } from '../../utils/InputValidate';
import { ERROR_MESSAGE, INPUT_MAX_LENGTH } from '../../utils/Constants';
import type { CardItemInfo, InputProps } from '../../types/Card';

type NameInputProps = InputProps<CardItemInfo['name']>;

const NameInput = ({
  value,
  setValue,
  errorMessage,
  setErrorMessage,
}: NameInputProps) => {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverLength(inputValue, INPUT_MAX_LENGTH.NAME_LENGTH)) {
      setErrorMessage(ERROR_MESSAGE.MAX_INPUT_LENGTH);
      return;
    }
    if (isInputEnglish(inputValue)) {
      setErrorMessage(ERROR_MESSAGE.ONLY_ENGLISH);
      return;
    }

    setValue(inputValue.toUpperCase());
    setErrorMessage('');
  };

  return (
    <InputGroup
      labelValue={<LabelValue length={value.length} />}
      errorMessage={errorMessage}
    >
      <InputBox isError={!!errorMessage}>
        <Input
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          textAlign='start'
          value={value}
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
