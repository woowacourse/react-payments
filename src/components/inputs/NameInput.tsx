import styled from 'styled-components';
import Input from '../common/Input';
import InputBox from '../common/InputBox';

const NameInput = () => {
  return (
    <InputBox labelValue={<LabelValue length={0} />}>
      <Input
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
        textAlign='start'
      ></Input>
    </InputBox>
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
