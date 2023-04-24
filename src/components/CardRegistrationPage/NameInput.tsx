import styled from "styled-components";
import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";
import { isEnglish, isOverMaxLength } from "../../utils";
import { INPUT_LENGTH } from "../../constants";
import { useCardItemAction, useCardItemValue } from "../provider/CardItemProvider";
import { useErrorMessageAction, useErrorMessageValue } from "../provider/ErrorMessageProvider";

const NameInput = () => {
  const { name } = useCardItemValue();
  const { setName } = useCardItemAction();

  const { nameErrorMessage } = useErrorMessageValue();
  const { setNameErrorMessage } = useErrorMessageAction();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverMaxLength(inputValue, INPUT_LENGTH.NAME)) {
      setNameErrorMessage("30자 이하로 입력해주세요");
      return;
    }
    if (!isEnglish(inputValue)) {
      setNameErrorMessage("영어만 입력해주세요");
      return;
    }

    setName(inputValue.toUpperCase());
    setNameErrorMessage("");
  };

  return (
    <InputGroup labelValue={<LabelValue length={name.length} />} errorMessage={nameErrorMessage}>
      <InputBox isError={!!nameErrorMessage}>
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          textAlign="start"
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
      <p>
        {length}/{INPUT_LENGTH.NAME}
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
