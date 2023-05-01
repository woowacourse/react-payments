import { useEffect, useRef } from "react";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import InputContainer from "../common/InputContainer/InputContainer";
import { useCardNameChangeForm } from "../../hooks/cards/useCardNameChangeForm";
import { CARD_NAME_INPUT_MAX_LENGTH } from "../../constants/input";

interface CardNameChangeProps {
  id: number;
  defaultCardName: string;
}

const CardNameChange = ({ id, defaultCardName }: CardNameChangeProps) => {
  const { handleSubmit } = useCardNameChangeForm(id);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultCardName;
  }, [defaultCardName]);

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer className="mg-t-36 center-hoz-item w-250">
        <Input
          name="cardName"
          ref={inputRef}
          variant="underline"
          placeholder="카드 별칭을 입력해주세요"
          autoFocus
          maxLength={CARD_NAME_INPUT_MAX_LENGTH}
        />
      </InputContainer>
      <Button
        variant="primary"
        className="complete-button mg-t-48 center-hoz-item w-250"
      >
        완료
      </Button>
    </form>
  );
};

export default CardNameChange;
