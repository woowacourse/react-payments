import type { ChangeEventHandler } from 'react';

import Input from '../common/Input';
import TextField from '../common/TextField';

import useCardFormValue from '../../hooks/useCardFormValue';

interface Props {
  handleOwnerChange: ChangeEventHandler<HTMLInputElement>;
}

const OwnerField = ({ handleOwnerChange }: Props) => {
  const { owner } = useCardFormValue();

  return (
    <TextField
      label="카드 소유자 이름(선택)"
      size="fit"
      valueLength={owner.length}
      maxLength={20}
    >
      <Input
        type="text"
        maxLength={20}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        tabIndex={7}
        value={owner}
        onChange={handleOwnerChange}
        //  ref={inputRefs[6]}
        data-set-value="setOwner"
      />
    </TextField>
  );
};

export default OwnerField;
