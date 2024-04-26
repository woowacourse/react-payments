import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";

interface InputCvcProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  inputError: boolean;
}

const InputPassword = ({ inputValue, handleChange, handleBlur, inputError }: InputCvcProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="password">{CARD_FORM_MESSAGE.twoDigitPassword}</InputLabel>
      <InputBox
        type="password"
        inputValue={inputValue}
        handleChange={handleChange}
        onBlur={handleBlur}
        size="large"
        placeholder="카드 비밀번호"
        id="password"
        name={CARD_INPUTBOX_NAME.authentication.password}
        isError={inputError}
        autoFocus
      />
    </InputContainer>
  );
};

export default InputPassword;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: rgba(10, 13, 19, 1);
  margin-bottom: 8px;
`;
