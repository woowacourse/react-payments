import { addSlashInExpirationDate } from '../replacers';
import { checkValidYearMonth } from '../validators';
import { useContext } from 'react';
import { CardInfoContext } from '../../../CardInfoProvider';
import LabeledInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';
import useInputUpdater from '../../../hooks/useInputUpdater';

const ExpirationDateInput = () => {
  const { setCardExpirationDate } = useContext(CardInfoContext);
  const { inputValue, errorMessage, setInputValueWithValidation } = useInputUpdater({
    trimmer: addSlashInExpirationDate,
    validator: checkValidYearMonth,
    contextSetter: setCardExpirationDate,
  });

  return (
    <LabeledInput title="만료일" errorMessage={errorMessage}>
      <Input
        width="40%"
        onChange={setInputValueWithValidation}
        value={inputValue}
        maxLength={5}
        name="expirationDate"
        placeholder="MM/YY"
        required={true}
      />
    </LabeledInput>
  );
};

export default ExpirationDateInput;
