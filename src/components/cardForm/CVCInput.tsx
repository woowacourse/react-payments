import { InputContainer } from "../common/InputContainer";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import styled from "styled-components";
import { CARD_INPUT_NUMBER } from "../../constant/cardInput";
import { isNumeric } from "../../utils/validate";
import { useInputCompleted } from "../../hook/useInputComplete";

const CVCInfo = {
  label: "cvc",
  $width: "84px",
  $textPosition: "center",
  type: "password",
};

export const CVCInput = () => {
  const { isCompleted, checkInputCompleted } = useInputCompleted();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isNumeric(value)) {
      const onlyNumbers = value.match(/\d+/g)?.join("") || "";
      e.target.value = onlyNumbers;
      return;
    }

    if (value.length > CARD_INPUT_NUMBER.CVC) {
      e.target.value = value.slice(0, -1);
      return;
    }
  };

  const handleOutFocusEvent = (e: React.FocusEvent<HTMLInputElement>) => {
    checkInputCompleted(e.target.value, CARD_INPUT_NUMBER.CVC);
  };

  return (
    <InputContainer>
      <InputLabel text="보안 코드 (CVC/CVV)" name="CVC" />
      <Wrapper>
        <Input
          {...CVCInfo}
          handleInput={handleInput}
          handleChange={handleOutFocusEvent}
          error={{
            isValid: isCompleted,
            errorMessage: "3자리 숫자를 입력하세요.",
          }}
        />
        <HelpIcon
          onClick={() => {
            console.log("CVC설명");
          }}
        >
          ?
        </HelpIcon>
      </Wrapper>
    </InputContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 10px;
`;

const HelpIcon = styled.div`
  position: absolute;
  transform: translate(95px, -7px);

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  width: 27px;
  height: 27px;
  border: 1px solid darkgray;
  border-radius: 50%;

  font-size: 15px;
  font-weight: 700;
  color: darkgray;
`;
