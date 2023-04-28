import { checkValidCardNumber } from '../../../domains/validators';
import { addHyphensInCardNumber } from '../../../domains/replacers';
import LabeledInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';
import { useContext } from 'react';
import useInputUpdater from '../../../hooks/useInputUpdater';
import { CardInfoContext } from '../../../contexts/CardInfoProvider';

const CardNumberInput = () => {
  const { setCardNumber } = useContext(CardInfoContext);
  const { inputValue, errorMessage, setInputValueWithValidation } = useInputUpdater({
    trimmer: addHyphensInCardNumber,
    validator: checkValidCardNumber,
    contextSetter: setCardNumber,
  });

  return (
    <LabeledInput title="카드 번호" errorMessage={errorMessage}>
      <Input
        width="100%"
        onChange={setInputValueWithValidation}
        maxLength={19}
        name="cardNumber"
        value={inputValue}
        placeholder="XXXX-XXXX-XXXX-XXXX"
        required={true}
      />
    </LabeledInput>
  );
};

export default CardNumberInput;
