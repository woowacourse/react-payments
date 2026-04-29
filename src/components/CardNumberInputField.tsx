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
  const handleCardNumberChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const input = e.target.value;
    const newCardNumberUnits: CardNumberUnits = [...cardNumberUnits];
    newCardNumberUnits[index] = input;
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
            handleCardNumberChange(0, e);
          },
        },
        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[1],
          onChange: (e) => {
            handleCardNumberChange(1, e);
          },
        },
        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[2],
          onChange: (e) => {
            handleCardNumberChange(2, e);
          },
        },

        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[3],
          onChange: (e) => {
            handleCardNumberChange(3, e);
          },
        },
      ]}
    />
  );
};

export default CardNumberInputField;
