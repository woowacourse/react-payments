import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import InputLayout from '@Components/InputLayout';

import * as CommonStyle from '@Styles/common';

import { CREDIT_CARD_MAX_LENGTH } from '@Constants/creditCard';

import { CreditCardOwnerInputProps } from './type';

function CreditCardOwnerInput({ creditCardOwner, errorMessage, updateOwner }: CreditCardOwnerInputProps) {
  const handleChangeOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateOwner(event.target.value);
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <CommonStyle.FlexBox justifyContent="space-between">
        <InputLabel label="카드 소유자 이름 (선택)" />
        <InputLabel label={`${creditCardOwner.length} / 20`} />
      </CommonStyle.FlexBox>
      <Input
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        type="string"
        value={creditCardOwner}
        width="100%"
        textAlign="start"
        onChange={handleChangeOwner}
        maxLength={CREDIT_CARD_MAX_LENGTH.owner}
      />
    </InputLayout>
  );
}

export default CreditCardOwnerInput;
