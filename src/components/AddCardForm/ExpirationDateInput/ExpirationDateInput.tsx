import { addSlashInExpirationDate } from '../../../domains/replacers';
import { checkValidYearMonth } from '../../../domains/validators';
import { useContext } from 'react';
import { CardInfoContext } from '../../../contexts/CardInfoProvider';
import LabeledInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';
import useInputUpdater from '../../../hooks/useInputUpdater';

const ExpirationDateInput = () => {
  const { cardExpirationDate, setCardExpirationDate } = useContext(CardInfoContext);
  const { inputValue, errorMessage, setInputValueWithValidation } = useInputUpdater({
    initialValue: cardExpirationDate.value,
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
