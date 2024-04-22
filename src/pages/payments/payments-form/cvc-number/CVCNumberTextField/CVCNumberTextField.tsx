import { Spacer, TextField } from '@components/index';

import { CVCNumberInput } from '@pages/payments';

export interface OwnerNameTextFieldProps {
  cvcNumber: string;
  onAddCVCNumber: (value: string) => void;
  cvcNumberError: { isError: boolean; errorMessage: string };
}

const OwnerNameTextField: React.FC<OwnerNameTextFieldProps> = ({ cvcNumber, cvcNumberError, onAddCVCNumber }) => {
  return (
    <section>
      <TextField.Title title="카드 소유자 이름을 입력해 주세요" />
      <Spacer space={10} />
      <TextField.Label htmlFor="cvcNumber" labelText="CVC" />
      <TextField.Content>
        <CVCNumberInput
          id="cvcNumber"
          isError={cvcNumberError.isError}
          placeholder={'123'}
          value={cvcNumber}
          onAddCVCNumber={(event) => onAddCVCNumber(event.target.value)}
        />
      </TextField.Content>
      <TextField.ErrorText errorText={cvcNumberError.errorMessage} />
    </section>
  );
};

export default OwnerNameTextField;
