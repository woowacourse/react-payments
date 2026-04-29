import type { CardNumberUnits } from "../pages/AddNewCardPage.tsx";
import InputField from "./InputField.tsx";

interface CardNumberInputFieldProps {
  cardNumberUnits: CardNumberUnits;
  onChange: (input: CardNumberUnits) => void;
}

const CardNumberInputField = ({
  cardNumberUnits,
  onChange,
}: CardNumberInputFieldProps) => {
  const handleCardNumberChange = (index: number, input: string) => {
    const newCardNumberUnits: CardNumberUnits = [...cardNumberUnits];
    newCardNumberUnits[index] = input.slice(0, 4);
    onChange(newCardNumberUnits);
  };

  return (
    <InputField
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      inputPropsList={[
        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[0],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(0, input);
          },
        },
        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[1],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(1, input);
          },
        },
        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[2],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(2, input);
          },
        },

        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[3],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(3, input);
          },
        },
      ]}
    />
  );
};

export default CardNumberInputField;
