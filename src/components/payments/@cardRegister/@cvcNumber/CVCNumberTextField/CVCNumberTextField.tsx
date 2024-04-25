import TextField from '@components/common/TextField/TextField';
import CVCNumberInput from '@components/payments/@cardRegister/@cvcNumber/CVCNumberInput/CVCNumberInput';
import { useEffect, useRef } from 'react';

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
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section>
      <TextField.Title title="CVC 번호를 입력해 주세요" />
      <TextField.Label htmlFor="cvc" labelText="CVC" />
      <TextField.Content>
        <CVCNumberInput
          isError={cvcError.isError}
          id="cvc"
          value={cvcNumber}
          refCallback={(element) => {
            inputRef.current = element;
          }}
          onAddCVCNumber={(event) => onAddCVCNumber(event.target.value)}
          onFocusCVCNumberField={onFocusCVCNumberField}
        />
      </TextField.Content>
      <TextField.ErrorText isError={cvcError.isError} errorText={cvcError.errorMessage} />
    </section>
  );
};

export default CVCNumberTextField;
