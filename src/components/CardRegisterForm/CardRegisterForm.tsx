import { ChangeEvent, useEffect, useRef } from 'react';
import InputContainer from '../common/InputContainer/InputContainer';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { useCardRegisterForm } from '../../hooks/useCardRegisterForm';
import { useError } from '../../hooks/useError';

interface CardNameInputProps {
  id: number;
  defaultCardName: string;
}

function CardRegister({ id, defaultCardName }: CardNameInputProps) {
  const { isValidCardName, submitError, handleCardNameChange, handleSubmit } =
    useCardRegisterForm(id);
  const { isError, handleError, removeError } = useError(isValidCardName);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultCardName;
  }, [defaultCardName]);

  useEffect(() => {
    if (submitError) handleError();
  }, [handleError, submitError]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    removeError();
    handleCardNameChange(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer
        className="mg-t-36 center-hoz-item w-250"
        supportingText={{
          error: '카드 별칭을 입력해주세요',
        }}
        isError={isError}
      >
        <Input
          name="cardName"
          ref={inputRef}
          variant="underline"
          placeholder="카드 별칭을 입력해주세요"
          autoFocus
          maxLength={20}
          isError={isError}
          onChange={onChange}
          onBlur={handleError}
        />
      </InputContainer>
      <Button variant="primary" className="complete-button mg-t-48 center-hoz-item w-250">
        완료
      </Button>
    </form>
  );
}

export default CardRegister;
