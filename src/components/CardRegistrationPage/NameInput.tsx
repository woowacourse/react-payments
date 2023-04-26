import styled from "styled-components";
import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";
import { INPUT_MAX_LENGTH } from "../../constants";
import { useCardItemAction, useCardItemValue, useErrorMessageValue } from "../provider/CardItemProvider";

const NameInput = () => {
  const { name } = useCardItemValue();
  const { onChangeName } = useCardItemAction();
  const { nameErrorMessage } = useErrorMessageValue();

  return (
    <InputGroup labelValue={<LabelValue length={name.length} />} errorMessage={nameErrorMessage}>
      <InputBox isError={!!nameErrorMessage}>
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          textAlign="start"
          value={name}
          onChange={onChangeName}
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
      <p>
        {length}/{INPUT_MAX_LENGTH.NAME}
      </p>
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
`;
export default NameInput;
