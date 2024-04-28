import { Spacer, TextField } from '@components/common';

import { OwnerNameInput } from '@components/payments/@cardRegister';

import useFocus from '@hooks/useFocus';

interface OwnerNameTextFieldProps {
  ownerName: string;
  ownerNameError: { isError: boolean; errorMessage: string };
  onAddOwnerName: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const OwnerNameTextField: React.FC<OwnerNameTextFieldProps> = ({
  ownerName,
  ownerNameError,
  onKeyDown,
  onAddOwnerName,
}) => {
  const handleAddInputElementInRef = useFocus();

  return (
    <section>
      <TextField.Title title="카드 소유자 이름을 입력해 주세요" />
      <TextField.SubTitle subTitle="이름을 모두 입력 했다면 엔터를 눌러주세요." />
      <Spacer space={10} />
      <TextField.Label htmlFor="ownerName" labelText="소유자 이름" />
      <TextField.Content>
        <OwnerNameInput
          id="ownerName"
          isError={ownerNameError.isError}
          value={ownerName}
          refCallback={handleAddInputElementInRef}
          onAddOwnerName={(event) => onAddOwnerName(event.target.value)}
          onKeyDown={onKeyDown}
        />
      </TextField.Content>
      <TextField.ErrorText isError={ownerNameError.isError} errorText={ownerNameError.errorMessage} />
    </section>
  );
};

export default OwnerNameTextField;
