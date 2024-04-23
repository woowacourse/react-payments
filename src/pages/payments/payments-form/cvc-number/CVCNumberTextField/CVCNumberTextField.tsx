import { Spacer, TextField } from '@components/index';

import { CVCNumberInput } from '@pages/payments';
import ID from '../../../../../constants/id';

export interface OwnerNameTextFieldProps {
  cvcNumber: string;
  onAddCVCNumber: (value: string) => void;
  cvcNumberError: { isError: boolean; errorMessage: string };
}

const CVCNumberTextField: React.FC<OwnerNameTextFieldProps> = ({ cvcNumber, cvcNumberError, onAddCVCNumber }) => {
  return (
    <section>
      <TextField.Title title="CVC 번호를 입력해 주세요" />
      <Spacer space={10} />
      <TextField.Label htmlFor="cvcNumber" labelText="CVC" />
      <TextField.Content>
        <CVCNumberInput
          id={ID.payments.cvcNumberInput}
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

export default CVCNumberTextField;
