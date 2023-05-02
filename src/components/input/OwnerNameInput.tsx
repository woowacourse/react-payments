import styled from 'styled-components';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { useOwnerNameInput } from '../../hooks/input/useOwnerNameInput';
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
  const { ownerNameError, handleInputChange, handleEnterPress } = useOwnerNameInput({
    setOwnerName,
    moveFocusToSecurityCode,
  });

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
      <Style.Caption id='ownerNameCaption' aria-live='assertive'>
        {ownerNameError}
      </Style.Caption>
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
    height: 8px;
    margin-top: 8px;

    font-size: 10px;
    color: #db5959;
  `,
};
