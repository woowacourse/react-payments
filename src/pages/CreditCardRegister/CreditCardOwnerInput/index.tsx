import { useContext } from 'react';

import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import InputLayout from '@Components/InputLayout';

import * as CommonStyle from '@Styles/common';

import {
  CreditCardRegisterContext,
  CreditCardRegisterUpdateContext,
} from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import { CREDIT_CARD_MAX_LENGTH } from '@Constants/creditCard';

function CreditCardOwnerInput() {
  const {
    creditCard: { owner },
    errorMessage: { owner: errorMessage },
  } = useContext(CreditCardRegisterContext);
  const {
    update: { owner: update },
  } = useContext(CreditCardRegisterUpdateContext);

  const handleChangeOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    update(event.target.value);
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <CommonStyle.FlexBox justifyContent="space-between">
        <InputLabel label="카드 소유자 이름 (선택)" />
        <InputLabel label={`${owner.length} / 20`} />
      </CommonStyle.FlexBox>
      <Input
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        type="string"
        value={owner}
        width="100%"
        textAlign="start"
        onChange={handleChangeOwner}
        maxLength={CREDIT_CARD_MAX_LENGTH.owner}
        isValid={!errorMessage}
      />
    </InputLayout>
  );
}

export default CreditCardOwnerInput;
