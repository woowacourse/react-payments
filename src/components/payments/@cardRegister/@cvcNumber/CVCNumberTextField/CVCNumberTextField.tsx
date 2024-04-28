import { TextField } from '@components/common';

import { CVCNumberInput } from '@components/payments/@cardRegister';

import useFocus from '@hooks/useFocus';

interface CVCNumberTextFieldProps {
  cvcNumber: string;
  cvcError: { isError: boolean; errorMessage: string };
  onAddCVCNumber: (value: string) => void;
  onFocusCVCNumberField?: () => void;
}

const CVCNumberTextField: React.FC<CVCNumberTextFieldProps> = ({
  cvcNumber,
  cvcError,
  onAddCVCNumber,
  onFocusCVCNumberField,
}) => {
  const handleAddInputElementInRef = useFocus();

  return (
    <section>
      <TextField.Title title="CVC 번호를 입력해 주세요" />
      <TextField.Label htmlFor="cvc" labelText="CVC" />
      <TextField.Content>
        <CVCNumberInput
          isError={cvcError.isError}
          id="cvc"
          value={cvcNumber}
          refCallback={handleAddInputElementInRef}
          onAddCVCNumber={(event) => onAddCVCNumber(event.target.value)}
          onFocusCVCNumberField={onFocusCVCNumberField}
        />
      </TextField.Content>
      <TextField.ErrorText isError={cvcError.isError} errorText={cvcError.errorMessage} />
    </section>
  );
};

export default CVCNumberTextField;
