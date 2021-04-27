import { forwardRef } from 'react';
import { Input, Label } from '../../../../../components';

export const OwnerNameInput = forwardRef((_, ref) => {
  return (
    <>
      <Label>카드 소유자 이름(선택)</Label>
      <Input
        className="OwnerNameInput__Field"
        container="CardInfoForm__Input__Filler--filled OwnerNameInput__Filler"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        name="ownerNameInput"
        ref={ref}
      />
    </>
  );
});

OwnerNameInput.displayName = 'OwnerNameInput';
