import styled from "styled-components";
import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";
import { CARD_INFO_RULES, GUIDE_MESSAGE } from "../../constants/constants";
import { isInValidHolderName } from "../../validators/validator";
import { setHolderName } from "../../reducer/cardReducer";
import useUpdateHandler from "../../hooks/useUpdateHandler";

interface IInputCounter {
  currLength: number;
  maxLength: number;
  isComplete: boolean;
}

const StyledInputCounter = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  line-height: 14px;
  color: ${(props: { isComplete: boolean }) =>
    props.isComplete ? "#04c09e" : "#525252"};
  letter-spacing: -0.085em;
`;

export function InputCounter({
  currLength = 0,
  maxLength,
  isComplete,
}: IInputCounter) {
  return (
    <StyledInputCounter isComplete={isComplete}>
      {currLength}/{maxLength}
    </StyledInputCounter>
  );
}

export default function CardHolderNameInput({
  holderName,
  dispatch,
}: {
  holderName: string;
  dispatch: (value: any) => void;
}) {
  const { updateHandler } = useUpdateHandler(
    dispatch,
    setHolderName,
    isInValidHolderName
  );

  return (
    <InputField
      labelText={"카드 소유자 이름 (선택)"}
      wrapperWidth={"100%"}
      horizontalAlign={"flex-start"}
      guideMessage={GUIDE_MESSAGE.VALID_HOLDER_NAME}
      isComplete={holderName !== ""}
      OptionalComponent={
        <InputCounter
          currLength={holderName.length}
          maxLength={CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH}
          isComplete={holderName !== ""}
        />
      }
    >
      <Input
        name={"holderName"}
        className={"holderName"}
        value={holderName}
        type={"text"}
        placeholder={"카드에 표시된 이름과 동일하게 입력하세요."}
        width={"100%"}
        textAlign={"left"}
        maxLength={CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH}
        onChange={updateHandler}
        isComplete={holderName !== ""}
      />
    </InputField>
  );
}
