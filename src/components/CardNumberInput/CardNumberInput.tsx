import { CardNumber, CardNumberGroups } from "../../types";
import { isNumeric } from "../../validator/Validator";
import { InputContainer, Input, Label } from "../common";

type CardNumberInputProps = {
  cardNumber: CardNumber;
  setCardNumber: (targetGroup: CardNumberGroups, value: string) => void;
};

const CardNumberInput = ({ cardNumber, setCardNumber }: CardNumberInputProps) => {
  const { firstGroup, secondGroup, thirdGroup, fourthGroup } = cardNumber;

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const targetGroup = e.target.name;

    if (!isNumeric(value)) return;
    if (!isCardNumberGroupsType(targetGroup)) return;

    setCardNumber(targetGroup, value);
  };

  const isCardNumberGroupsType = (targetGroup: string): targetGroup is CardNumberGroups => {
    return targetGroup in cardNumber;
  };

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
          onChange={handleCardNumber}
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
          onChange={handleCardNumber}
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
          onChange={handleCardNumber}
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
          onChange={handleCardNumber}
        />
      </InputContainer>
    </Label>
  );
};

export default CardNumberInput;
