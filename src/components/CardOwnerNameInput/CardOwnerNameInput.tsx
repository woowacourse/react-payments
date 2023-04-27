import styled from "styled-components";
import { isEndsWithSpace, isValidOwnerName } from "../../validator/Validator";
import { InputContainer, Input, Label } from "../common";

type CardOwnerNameInputProp = {
  ownerName: string;
  nameLength: number;
  setOwnerName: (value: string) => void;
};

const CardOwnerNameInput = ({ ownerName, nameLength, setOwnerName }: CardOwnerNameInputProp) => {
  const onChangeOwnerNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isValidOwnerName(value)) return;

    setOwnerName(value);
    setTimeout(() => {
      setOwnerName(value.toUpperCase());
    }, 70);
  };

  const onBlurOwnerNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isEndsWithSpace(value)) setOwnerName(value.slice(0, -1));
  };

  return (
    <Label>
      <Div>
        <span>카드 소유자 이름(선택)</span>
        <span>{nameLength} / 30</span>
      </Div>
      <InputContainer width="318px">
        <Input
          value={ownerName}
          width="100%"
          textAlign="left"
          placeholder="카드에 표시된 영문 이름과 동일하게 입력하세요."
          type="text"
          maxLength={30}
          required
          onChange={onChangeOwnerNameHandler}
          onBlur={onBlurOwnerNameHandler}
          autoComplete="name"
        />
      </InputContainer>
    </Label>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CardOwnerNameInput;
