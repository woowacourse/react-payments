import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import { ExpirationPeriodValue } from "../../@types/CreditCard";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";

interface InputExpirationPeriodProps {
  inputValue: ExpirationPeriodValue;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  inputError: boolean;
}

interface InputboxData {
  inputValue: string;
  name: string;
}

const InputExpirationPeriod = ({
  inputValue,
  handleChange,
  handleBlur,
  inputError,
}: InputExpirationPeriodProps) => {
  const inputboxData: InputboxData[] = [
    {
      inputValue: inputValue.month,
      name: CARD_INPUTBOX_NAME.expirationPeriod.month,
    },
    {
      inputValue: inputValue.year,
      name: CARD_INPUTBOX_NAME.expirationPeriod.year,
    },
  ];

  return (
    <InputContainer>
      <InputLabel htmlFor="expirationDate1">{CARD_FORM_MESSAGE.expirationDate}</InputLabel>
      <InputWrapper>
        {inputboxData.map((data, idx) => (
          <InputBox
            key={`expirationDate${idx + 1}`}
            inputValue={data.inputValue}
            handleChange={handleChange}
            onBlur={handleBlur}
            size="medium"
            placeholder="MM"
            id={`expirationDate${idx + 1}`}
            name={data.name}
            isError={inputError}
            autoFocus={idx === 0}
          />
        ))}
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
