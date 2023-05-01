import { ChangeEvent } from "react";
import InputContainer from "../../common/InputContainer/InputContainer";
import Input from "../../common/Input/Input";

interface CardOwnerNameProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

function CardOwnerName({ onInputChange, value = "" }: CardOwnerNameProps) {
  return (
    <InputContainer
      label="카드 소유자 이름"
      id="ownerName"
      characterCounter={[value.length, 20]}
    >
      <Input
        id="ownerName"
        data-name="ownerName"
        value={value}
        placeholder="카드에 표시된 이름과 동일하게 입력해주세요"
        maxLength={20}
        onChange={onInputChange}
        autoComplete="cc-csc"
      />
    </InputContainer>
  );
}

export default CardOwnerName;
