import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";
import THEME from "../../styles/theme";

interface InputOwnerNameProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  inputError: boolean;
  id: string;
}

const InputOwnerName = ({
  inputValue,
  handleChange,
  handleBlur,
  inputError,
  id,
}: InputOwnerNameProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="ownerName">{CARD_FORM_MESSAGE.cardOwner}</InputLabel>
      <InputBox
        inputValue={inputValue.toUpperCase()}
        handleChange={handleChange}
        onBlur={handleBlur}
        size="large"
        placeholder="JOHN DOE"
        id={id}
        name={CARD_INPUTBOX_NAME.owner.name}
        isError={inputError}
        autoFocus
      />
    </InputContainer>
  );
};

export default InputOwnerName;

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
