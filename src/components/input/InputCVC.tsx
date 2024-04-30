import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";
import THEME from "../../styles/theme";

interface InputCvcProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  inputError: boolean;
  id: string;
}

const InputCvc = ({ inputValue, handleChange, inputError, handleBlur, id }: InputCvcProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="cvcNumber">{CARD_FORM_MESSAGE.cvc}</InputLabel>
      <InputBox
        inputValue={inputValue}
        handleChange={handleChange}
        size="large"
        placeholder="cvc 3자리"
        id={id}
        name={CARD_INPUTBOX_NAME.info.cvc}
        isError={inputError}
        onBlur={handleBlur}
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
  color: ${THEME.DEFAULT.black};
  margin-bottom: 8px;
`;
