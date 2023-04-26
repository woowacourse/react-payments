import Input from '@Components/Input';

import * as CommonStyle from '@Styles/common';

import InputLabel from '../InputLabel';
import InputLayout from '../InputLayout';

type Props = {
  creditCardOwner: string;
  errorMessage: string | null;
  updateOwner: (newName: string) => void;
};

function CreditCardOwnerInput({ creditCardOwner, errorMessage, updateOwner }: Props) {
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
        maxLength={20}
      />
    </InputLayout>
  );
}

export default CreditCardOwnerInput;
