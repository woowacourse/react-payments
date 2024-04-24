import TextField from '@components/common/TextField/TextField';
import CVCInput from '@components/payments/@cvcNumber/CVCNumberInput/CVCNumberInput';

interface CVCNumberTextFieldProps {
  cvcNumber: string;
  onAddCVCNumber: (value: string) => void;
  cvcError: { isError: boolean; errorMessage: string };
}

const CVCNumberTextField: React.FC<CVCNumberTextFieldProps> = ({ cvcNumber, onAddCVCNumber, cvcError }) => {
  return (
    <section>
      <TextField.Title title="CVC 번호를 입력해 주세요" />
      <TextField.Label htmlFor="cvc" labelText="CVC" />
      <TextField.Content>
        <CVCInput
          isError={cvcError.isError}
          id="cvc"
          value={cvcNumber}
          onAddCVCNumber={(event) => onAddCVCNumber(event.target.value)}
        />
      </TextField.Content>
      <TextField.ErrorText isError={cvcError.isError} errorText={cvcError.errorMessage} />
    </section>
  );
};

export default CVCNumberTextField;
