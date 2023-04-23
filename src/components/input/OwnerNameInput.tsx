import styled from 'styled-components';
import { Input } from './Input';
import { InputWrapper } from './InputWrapper';
import { OwnerName } from '../../types';
import { isEnglish } from '../../validator';
import { ERROR, MAX_NAME_LENGTH } from '../../constants';

interface Props {
  ownerName: OwnerName;
  ownerNameInputRef: React.RefObject<HTMLInputElement>;
  setOwnerName: React.Dispatch<React.SetStateAction<OwnerName>>;
  moveFocusToSecurityCode: () => void;
}

export function OwnerNameInput({
  ownerName,
  ownerNameInputRef,
  setOwnerName,
  moveFocusToSecurityCode,
}: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isEnglish(e.target.value, MAX_NAME_LENGTH)) {
      alert(ERROR.INVALID_OWNER_NAME);

      e.target.value = '';
    }

    setOwnerName(e.target.value.toUpperCase());
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') moveFocusToSecurityCode();
  };

  return (
    <>
      <Style.Label htmlFor='ownerName'>
        <Style.Title>카드 소유자 이름(선택)</Style.Title>
        <Style.NameLength>
          {ownerName.length}/{MAX_NAME_LENGTH}
        </Style.NameLength>
      </Style.Label>
      <InputWrapper width={318}>
        <Input
          id='ownerName'
          ref={ownerNameInputRef}
          value={ownerName}
          width={318}
          maxLength={MAX_NAME_LENGTH}
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
        />
      </InputWrapper>
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
