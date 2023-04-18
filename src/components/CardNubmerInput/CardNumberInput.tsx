import { InputContainer, Input, Label } from "../common";

const CardNumberInput = () => {
  return (
    <Label>
      카드번호
      <InputContainer width="318px">
        <Input width="40px" type="text" maxLength={4} required />
        <span>-</span>
        <Input width="40px" type="text" maxLength={4} required />
        <span>-</span>
        <Input width="40px" type="password" maxLength={4} required />
        <span>-</span>
        <Input width="40px" type="password" maxLength={4} required />
      </InputContainer>
    </Label>
  );
};

export default CardNumberInput;
