import { Spacer, TextField } from '@components/index';

import { OwnerNameInput } from '@pages/payments';

export interface OwnerNameTextFieldProps {
  ownerName: string;
  onAddOwnerName: (value: string) => void;
  ownerNameState: { isError: boolean; errorMessage: string };
}

const OwnerNameTextField: React.FC<OwnerNameTextFieldProps> = ({ ownerName, onAddOwnerName, ownerNameState }) => {
  return (
    <section>
      <TextField.Title title="카드 소유자 이름을 입력해 주세요" />
      <Spacer height={10} />
      <TextField.Label htmlFor="ownerName" labelText="소유자 이름" />
      <TextField.Content>
        <OwnerNameInput
          id="ownerName"
          isError={ownerNameState.isError}
          placeholder={'JOHNDOE'}
          value={ownerName}
          onAddOwnerName={(event) => onAddOwnerName(event.target.value)}
        />
      </TextField.Content>
      <TextField.ErrorText errorText={ownerNameState.errorMessage} />
    </section>
  );
};

export default OwnerNameTextField;
