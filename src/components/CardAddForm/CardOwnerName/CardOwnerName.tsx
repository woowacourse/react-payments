import Input from '../../common/Input/Input';
import InputContainer from '../../common/InputContainer/InputContainer';
import { useInputContainer } from '../../../hooks/useInputContainer';
import { CardInputValidation } from '../../../types';
import { formatEnglishName } from '../../../utils/formatter';
import { ChangeEvent } from 'react';

interface CardOwnerNameProps {
  validator: (input: string) => boolean;
  onValidation: (key: keyof CardInputValidation, value: boolean) => void;
  onChange: (key: keyof CardInputValidation, value: string) => void;
}

function CardOwnerName({ validator, onValidation, onChange }: CardOwnerNameProps) {
  const { inputValue, handleInputChange, isError, handleInputBlur } = useInputContainer({
    formatter: formatEnglishName,
    validator,
    onValidation,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
    onChange('ownerName', event.target.value);
  };

  return (
    <InputContainer
      label="카드 소유자 이름"
      id="ownerName"
      supportingText="카드에 표시된 이름과 동일하게 입력해주세요"
    >
      <Input
        type="text"
        id="ownerName"
        value={inputValue}
        maxLength={30}
        isError={isError}
        onChange={handleChange}
        onBlur={handleInputBlur}
      />
    </InputContainer>
  );
}

export default CardOwnerName;
