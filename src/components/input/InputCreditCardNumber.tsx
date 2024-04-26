import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import { CardNumberValue } from "../../@types/CreditCard";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";

interface InputCreditCardNumberProps {
  inputValue: CardNumberValue;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  inputError: boolean;
}

interface InputboxData {
  inputValue: string;
  name: string;
}

const InputCreditCardNumber = ({
  inputValue,
  handleChange,
  handleBlur,
  inputError,
}: InputCreditCardNumberProps) => {
  const inputboxData: InputboxData[] = [
    {
      inputValue: inputValue.firstValue,
      name: CARD_INPUTBOX_NAME.cardNumber.firstValue,
    },
    {
      inputValue: inputValue.secondValue,
      name: CARD_INPUTBOX_NAME.cardNumber.secondValue,
    },
    {
      inputValue: inputValue.thirdValue,
      name: CARD_INPUTBOX_NAME.cardNumber.thirdValue,
    },
    {
      inputValue: inputValue.fourthValue,
      name: CARD_INPUTBOX_NAME.cardNumber.fourthValue,
    },
  ];

  return (
    <InputContainer>
      <InputLabel htmlFor="creditCardNumber1">{CARD_FORM_MESSAGE.cardNumber}</InputLabel>
      <InputWrapper>
        {inputboxData.map((data, idx) => (
          <InputBox
            key={`creditCardNumber${idx + 1}`}
            inputValue={data.inputValue}
            handleChange={handleChange}
            onBlur={handleBlur}
            size="small"
            placeholder="1234"
            id={`creditCardNumber${idx + 1}`}
            name={data.name}
            isError={inputError}
            autoFocus={idx === 0}
          />
        ))}
      </InputWrapper>
    </InputContainer>
  );
};

export default InputCreditCardNumber;

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
