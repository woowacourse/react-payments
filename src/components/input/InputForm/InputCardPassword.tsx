import styled from "@emotion/styled";
import CARD_FORM_MESSAGE from "../../../constants/cardFormMessage";
import CARD_INPUTBOX_NAME from "../../../constants/cardInputBoxName";
import InputBox from "../common/InputBox";

interface InputCardPasswordProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputError: boolean;
}

const InputCardPassword = ({ inputValue, handleChange, inputError }: InputCardPasswordProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="password">{CARD_FORM_MESSAGE.cardPassword}</InputLabel>
      <InputBox
        inputValue={inputValue}
        handleChange={handleChange}
        size="large"
        placeholder="**"
        id="password"
        name={CARD_INPUTBOX_NAME.password.number}
        isError={inputError}
      />
    </InputContainer>
  );
};

export default InputCardPassword;

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
