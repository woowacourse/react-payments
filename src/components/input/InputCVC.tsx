import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";

interface InputCvcProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputError: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

const InputCvc = ({ inputValue, handleChange, inputError, onFocus, onBlur }: InputCvcProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="cvcNumber">{CARD_FORM_MESSAGE.cvc}</InputLabel>
      <InputBox
        inputValue={inputValue}
        handleChange={handleChange}
        size="large"
        placeholder="cvc 3자리"
        id="cvcNumber"
        name={CARD_INPUTBOX_NAME.info.cvc}
        isError={inputError}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </InputContainer>
  );
};

export default InputCvc;

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
