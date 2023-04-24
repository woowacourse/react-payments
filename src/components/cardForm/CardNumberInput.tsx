import { InputContainer } from "../common/InputContainer";
import { InputLabel } from "../common/InputLabel";
import { Input } from "../common/Input";
import styled from "styled-components";
import { CARD_INPUT_NUMBER } from "../../constant/cardInput";
import { isNumeric } from "../../utils/validate";
import { useInputCompleted } from "../../hook/useInputComplete";

interface CardNumberInputProps {
  setCardNumbers: (index: number, numbers: string) => void;
}

const cardNumberInputInfo = {
  width: "70px",
  textPosition: "center",
};

export const CardNumberInput = ({ setCardNumbers }: CardNumberInputProps) => {
  const { isCompleted, checkInputCompleted } = useInputCompleted();

  const handleInput =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (!isNumeric(value)) {
        const onlyNumbers = value.match(/\d+/g)?.join("") || "";
        e.target.value = onlyNumbers;
        return;
      }

      if (value.length > CARD_INPUT_NUMBER.CARD_NUMBER) {
        e.target.value = value.slice(0, -1);
        return;
      }

      setCardNumbers(index - 1, value);
    };

  const handleOutFocusEvent = (e: React.FocusEvent<HTMLInputElement>) => {
    checkInputCompleted(e.target.value, CARD_INPUT_NUMBER.CARD_NUMBER);
  };

  return (
    <InputContainer>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Row>
        <Input
          error={{
            isValid: isCompleted,
            errorMessage: "16자리 숫자를 입력하세요.",
          }}
          {...cardNumberInputInfo}
          type="text"
          label="cardNumber1"
          handleInput={handleInput(1)}
          handleChange={handleOutFocusEvent}
        />
        {[2, 3, 4].map((ind) => (
          <Input
            {...cardNumberInputInfo}
            type={ind < 3 ? "text" : "password"}
            label={`cardNumber${ind}`}
            handleInput={handleInput(ind)}
            handleChange={handleOutFocusEvent}
          />
        ))}
      </Row>
    </InputContainer>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;
