import { CardNumber } from "../../types";
import { ErrorMessage } from "../CardExpirationDateInput/CardExpirationDateInput";
import { InputContainer, Input, Label } from "../common";

type CardNumberInputProps = {
  cardNumber: CardNumber;
  error: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardNumberInput = ({ cardNumber, error, onChange, onBlur }: CardNumberInputProps) => {
  const { firstGroup, secondGroup, thirdGroup, fourthGroup } = cardNumber;

  return (
    <Label>
      카드번호
      <InputContainer width="318px" border={error ? "3px solid #f09c9c" : "none"}>
        <Input
          value={firstGroup}
          name="firstGroup"
          inputMode="numeric"
          textAlign="center"
          width="55px"
          type="text"
          minLength={4}
          maxLength={4}
          required
          autoFocus
          onChange={onChange}
          onBlur={onBlur}
        />
        <span>-</span>
        <Input
          value={secondGroup}
          name="secondGroup"
          inputMode="numeric"
          textAlign="center"
          width="55px"
          type="text"
          minLength={4}
          maxLength={4}
          required
          onChange={onChange}
          onBlur={onBlur}
        />
        <span>-</span>
        <Input
          value={thirdGroup}
          name="thirdGroup"
          inputMode="numeric"
          textAlign="center"
          width="55px"
          type="password"
          minLength={4}
          maxLength={4}
          required
          onChange={onChange}
          onBlur={onBlur}
        />
        <span>-</span>
        <Input
          value={fourthGroup}
          name="fourthGroup"
          inputMode="numeric"
          textAlign="center"
          width="55px"
          type="password"
          minLength={4}
          maxLength={4}
          required
          onChange={onChange}
          onBlur={onBlur}
        />
      </InputContainer>
      {error && <ErrorMessage>카드번호 입력 형식이 잘못되었습니다.</ErrorMessage>}
    </Label>
  );
};

export default CardNumberInput;
