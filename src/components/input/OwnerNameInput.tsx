import styled from 'styled-components';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { isEnglish, isOverMaxLength } from '../../utils/validator';
import { MAX_NAME_SIZE } from '../../constants';
import { OwnerName } from '../../types';

interface Props {
  ownerName: OwnerName;
  ownerNameInputRef: React.RefObject<HTMLInputElement>;
  setOwnerName: (input: OwnerName) => void;
  moveFocusToSecurityCode?: () => void;
}

export function OwnerNameInput({
  ownerName,
  ownerNameInputRef,
  setOwnerName,
  moveFocusToSecurityCode,
}: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isEnglish(e.target.value)) return;
    if (isOverMaxLength(e.target.value, MAX_NAME_SIZE)) return;

    setOwnerName(e.target.value.toUpperCase());
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && moveFocusToSecurityCode) moveFocusToSecurityCode();
  };

  return (
    <>
      <Style.Label htmlFor='ownerName'>
        <Style.Title>카드 소유자 이름(선택)</Style.Title>
        <Style.NameLength>
          {ownerName.length}/{MAX_NAME_SIZE}
        </Style.NameLength>
      </Style.Label>
      <InputContainer width={'318px'}>
        <Input
          id='ownerName'
          ref={ownerNameInputRef}
          value={ownerName}
          width={'318px'}
          maxLength={MAX_NAME_SIZE}
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
        />
      </InputContainer>
    </>
  );
}

const Style = {
  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;

    font-size: 12px;
  `,

  NameLength: styled.span`
    color: #2f2f2f;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,
};
