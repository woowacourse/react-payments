import styled from "@emotion/styled";
import { ExpirationPeriodValue } from "../../@types/CreditCard";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";
import InputBox from "./common/InputBox";

interface InputExpirationPeriodProps {
  inputValue: ExpirationPeriodValue;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputError: boolean;
}

const InputExpirationPeriod = ({
  inputValue,
  handleChange,
  inputError,
}: InputExpirationPeriodProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="expirationDate">{CARD_FORM_MESSAGE.expirationDate}</InputLabel>
      <InputWrapper>
        <InputBox
          inputValue={inputValue.month}
          handleChange={handleChange}
          size="medium"
          placeholder="MM"
          id="expirationDate"
          name={CARD_INPUTBOX_NAME.expirationPeriod.month}
          isError={inputError}
        />
        <InputBox
          inputValue={inputValue.year}
          handleChange={handleChange}
          size="medium"
          placeholder="YY"
          id="expirationDate"
          name={CARD_INPUTBOX_NAME.expirationPeriod.year}
          isError={inputError}
        />
      </InputWrapper>
    </InputContainer>
  );
};

export default InputExpirationPeriod;

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

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
