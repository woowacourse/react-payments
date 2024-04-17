import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";

interface InputOwnerNameProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputOwnerName = ({ inputValue, handleChange }: InputOwnerNameProps) => {
  return (
    <>
      <InputLabel htmlFor="ownerName">{CARD_FORM_MESSAGE.cardOwner}</InputLabel>
      <InputBox
        inputValue={inputValue}
        handleChange={handleChange}
        size="large"
        placeholder="JOHN DOE"
        id="ownerName"
        name="name"
      />
    </>
  );
};

export default InputOwnerName;

const InputLabel = styled.label`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: rgba(10, 13, 19, 1);
`;
