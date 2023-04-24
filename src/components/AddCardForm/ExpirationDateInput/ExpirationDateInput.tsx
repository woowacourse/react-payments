import useValidator from '../../../hooks/useValidator';
import { checkValidYearMonth } from '../validators';
import { addSlashInExpirationDate } from '../replacers';
import CardInfoInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';

type ExpirationDateInputProps = {
  updateExpirationDate: (expirationDate: string) => void;
};

const ExpirationDateInput = ({ updateExpirationDate }: ExpirationDateInputProps) => {
  const { value, isValid, errorMessage, setValueWithValidation } = useValidator(checkValidYearMonth);

  const setExpirationDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const expirationDate = event.target.value;
    const expirationDateWithSlash = addSlashInExpirationDate(expirationDate);

    setValueWithValidation(expirationDateWithSlash);
    updateExpirationDate(expirationDateWithSlash);
  };

  return (
    <CardInfoInput title="만료일" errorMessage={errorMessage}>
      <Input
        width="40%"
        onChange={setExpirationDate}
        value={value}
        maxLength={5}
        name="expirationDate"
        placeholder="MM/YY"
        required={true}
      />
    </CardInfoInput>
  );
};

export default ExpirationDateInput;
