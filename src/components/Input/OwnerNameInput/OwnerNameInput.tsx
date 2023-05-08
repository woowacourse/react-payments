import { Input } from 'components/common';
import { ChangeEventHandler } from 'react';
import { Styled as S } from './OwnerNameInput.styles';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { MAX_OWNER_NAME_LENGTH } from '../../../constants';

export interface OwnerNameInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function OwnerNameInput({ value, onChange }: OwnerNameInputProps) {
  return (
    <>
      <S.OwnerNameLabelContainer>
        <FormLabel>카드 소유자 이름(선택)</FormLabel>
        <FormLabel>{`${value.length} / ${MAX_OWNER_NAME_LENGTH}`}</FormLabel>
      </S.OwnerNameLabelContainer>
      <S.OwnerNameInputWrapper>
        <Input
          id="owner-name"
          value={value}
          type="text"
          maxLength={30}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요"
          onChange={onChange}
        />
      </S.OwnerNameInputWrapper>
    </>
  );
}
