import styled from 'styled-components';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { isEnglish, isOverMaxLength } from '../../utils/validator';
import { MAX_NAME_SIZE } from '../../constants';
import { OwnerName } from '../../types';

interface Props {
  ownerName: OwnerName;
  ownerNameInputRef: React.RefObject<HTMLInputElement>;
  caption?: string;
  setOwnerName: (input: OwnerName) => void;
  moveFocusToSecurityCode?: () => void;
}

export function OwnerNameInput({
  ownerName,
  ownerNameInputRef,
  caption = '카드 소유자의 이름을 영문 30자 이내로 입력해주세요.',
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
    <div>
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
          aria-labelledby='ownerNameCaption'
        />
      </InputContainer>
      <Style.Caption id='ownerNameCaption'>{caption}</Style.Caption>
    </div>
  );
}

const Style = {
  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;
    margin-bottom: 10px;

    font-size: 12px;
  `,

  NameLength: styled.span`
    color: #2f2f2f;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Caption: styled.p`
    margin-top: 8px;

    font-size: 10px;
    color: #737373;
  `,
};
