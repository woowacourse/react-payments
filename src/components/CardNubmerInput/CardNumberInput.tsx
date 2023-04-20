import { CardNumber } from "../../types";
import { InputContainer, Input, Label } from "../common";

type CardNumberInputProps = {
  cardNumber: CardNumber;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardNumberInput = ({ cardNumber, onChange }: CardNumberInputProps) => {
  const { firstGroup, secondGroup, thirdGroup, fourthGroup } = cardNumber;

  return (
    <Label>
      카드번호
      <InputContainer width="318px">
        <Input
          value={firstGroup}
          name="firstGroup"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          type="text"
          minLength={4}
          maxLength={4}
          required
          autoFocus
          onChange={onChange}
        />
        <span>-</span>
        <Input
          value={secondGroup}
          name="secondGroup"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          type="text"
          minLength={4}
          maxLength={4}
          required
          onChange={onChange}
        />
        <span>-</span>
        <Input
          value={thirdGroup}
          name="thirdGroup"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          type="password"
          minLength={4}
          maxLength={4}
          required
          onChange={onChange}
        />
        <span>-</span>
        <Input
          value={fourthGroup}
          name="fourthGroup"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          type="password"
          minLength={4}
          maxLength={4}
          required
          onChange={onChange}
        />
      </InputContainer>
    </Label>
  );
};

export default CardNumberInput;
