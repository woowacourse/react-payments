import styled from "@emotion/styled";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";
import InputBox from "./common/InputBox";

interface InputCVCNumberProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputError: boolean;
  onClick: () => void;
}

const InputCVCNumber = ({ inputValue, handleChange, inputError, onClick }: InputCVCNumberProps) => {
  return (
    <InputContainer onClick={onClick}>
      <InputLabel htmlFor="cvcNumber">{CARD_FORM_MESSAGE.inputCardCVC}</InputLabel>
      <InputBox
        inputValue={inputValue}
        handleChange={handleChange}
        size="large"
        placeholder="123"
        id="cvcNumber"
        name={CARD_INPUTBOX_NAME.cvc.number}
        isError={inputError}
      />
    </InputContainer>
  );
};

export default InputCVCNumber;

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
