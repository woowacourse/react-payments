import { InputContainer, Input, Label } from "../common";

type CardNumberInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardNumberInput = ({ onChange }: CardNumberInputProps) => {
  return (
    <Label>
      카드번호
      <InputContainer width="318px">
        <Input
          name="firstGroup"
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
          name="secondGroup"
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
          name="thirdGroup"
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
          name="fourthGroup"
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
