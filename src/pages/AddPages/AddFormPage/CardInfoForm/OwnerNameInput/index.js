import { forwardRef } from 'react';
import { Input, Label, Text } from '../../../../../components';
import { handleOwnerNameInputChange, handleOwnerNameInputBlur } from './handler';
import { MAX_OWNER_NAME_LENGTH } from '../../../../../constants';

export const OwnerNameInput = forwardRef((props, ref) => {
  const { initialOwnerName, ownerName, setOwnerName, setIsOwnerNameFilled } = props;

  return (
    <>
      <div className="OwnerNameInput__Header">
        <Label>카드 소유자 이름(선택)</Label>
        <Text className="OwnerNameInput__Header__Text">{`${ownerName.length}/${MAX_OWNER_NAME_LENGTH}`}</Text>
      </div>
      <Input
        className="OwnerNameInput__Field"
        container="OwnerNameInput__Filler CardInfoForm__Input__Filler--filled"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        name="ownerNameInput"
        maxLength={MAX_OWNER_NAME_LENGTH}
        ref={ref}
        value={ownerName === initialOwnerName ? '' : ownerName}
        onChange={(e) => handleOwnerNameInputChange({ e, setOwnerName })}
        onBlur={(e) => handleOwnerNameInputBlur({ e, setIsOwnerNameFilled })}
      />
    </>
  );
});

OwnerNameInput.displayName = 'OwnerNameInput';
