import { Spacer, TextField } from '@components/common';

import OwnerNameInput from '@components/payments/@ownerName/OwnerNameInput/OwnerNameInput';

interface OwnerNameTextFieldProps {
  ownerName: string;
  onAddOwnerName: (value: string) => void;
  ownerNameError: { isError: boolean; errorMessage: string };
}

const OwnerNameTextField: React.FC<OwnerNameTextFieldProps> = ({ ownerName, onAddOwnerName, ownerNameError }) => {
  return (
    <section>
      <TextField.Title title="카드 소유자 이름을 입력해 주세요" />
      <Spacer space={10} />
      <TextField.Label htmlFor="ownerName" labelText="소유자 이름" />
      <TextField.Content>
        <OwnerNameInput
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
