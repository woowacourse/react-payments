import { Spacer, TextField } from '@components/common';

import OwnerNameInput from '@components/payments/@cardRegister/@ownerName/OwnerNameInput/OwnerNameInput';
import { useEffect, useRef } from 'react';

interface OwnerNameTextFieldProps {
  ownerName: string;
  onAddOwnerName: (value: string) => void;
  ownerNameError: { isError: boolean; errorMessage: string };
}

const OwnerNameTextField: React.FC<OwnerNameTextFieldProps> = ({ ownerName, onAddOwnerName, ownerNameError }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section>
      <TextField.Title title="카드 소유자 이름을 입력해 주세요" />
      <Spacer space={10} />
      <TextField.Label htmlFor="ownerName" labelText="소유자 이름" />
      <TextField.Content>
        <OwnerNameInput
          refCallback={(element) => {
            inputRef.current = element;
          }}
          id="ownerName"
          isError={ownerNameError.isError}
          placeholder={'JOHN DOE'}
          value={ownerName}
          onAddOwnerName={(event) => onAddOwnerName(event.target.value)}
        />
      </TextField.Content>
      <TextField.ErrorText isError={ownerNameError.isError} errorText={ownerNameError.errorMessage} />
    </section>
  );
};

export default OwnerNameTextField;
