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
            onChange([
              input.slice(0, 4),
              cardNumberUnits[1],
              cardNumberUnits[2],
              cardNumberUnits[3],
            ]);
          },
        },
        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[1],
          onChange: (e) => {
            const input = e.target.value;
            onChange([
              cardNumberUnits[0],
              input.slice(0, 4),
              cardNumberUnits[2],
              cardNumberUnits[3],
            ]);
          },
        },
        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[2],
          onChange: (e) => {
            const input = e.target.value;
            onChange([
              cardNumberUnits[0],
              cardNumberUnits[1],
              input.slice(0, 4),
              cardNumberUnits[3],
            ]);
          },
        },

        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[3],
          onChange: (e) => {
            const input = e.target.value;
            onChange([
              cardNumberUnits[0],
              cardNumberUnits[1],
              cardNumberUnits[2],
              input.slice(0, 4),
            ]);
          },
        },
      ]}
    />
  );
};

export default CardNumberInputField;
