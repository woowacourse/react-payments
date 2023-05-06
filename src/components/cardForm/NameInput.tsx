import styled from 'styled-components';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { isInputEnglish, isOverLength } from '../../utils/InputValidate';
import { ERROR_MESSAGE, INPUT_MAX_LENGTH } from '../../utils/Constants';
import { useContext, useEffect } from 'react';
import {
  CardFormErrorValueContext,
  CardFormValueContext,
} from '../../context/CardFormContext';
import { useInput } from '../../hooks/useInput';

const NameInput = () => {
  const { name, setName } = useContext(CardFormValueContext);
  const { nameError, setNameError } = useContext(CardFormErrorValueContext);

  const { value, errorMessage, handleChangeInput } = useInput(
    isInputEnglish,
    INPUT_MAX_LENGTH.NAME_LENGTH
  );

  useEffect(() => {
    setName(value);
    setNameError(errorMessage);
  }, [value, errorMessage]);

  return (
    <InputGroup
      labelValue={<LabelValue length={name.length} />}
      errorMessage={nameError}
    >
      <InputBox isError={!!nameError}>
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
