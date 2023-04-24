import { checkValidCardNumber } from '../validators';
import { addHyphensInCardNumber } from '../replacers';
import useValidator from '../../../hooks/useValidator';
import LabeledInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';

type CardNumberInputProps = {
  updateCardNumber: (cardNumber: string) => void;
};

const CardNumberInput = ({ updateCardNumber }: CardNumberInputProps) => {
  const { value, isValid, errorMessage, setValueWithValidation } = useValidator(checkValidCardNumber);

  const setCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = event.target.value;
    const cardNumberWithHyphens = addHyphensInCardNumber(cardNumber);

    setValueWithValidation(cardNumberWithHyphens);
    updateCardNumber(cardNumberWithHyphens);
  };

  return (
    <LabeledInput title="카드 번호" errorMessage={errorMessage}>
      <Input
        width="100%"
        onChange={setCardNumber}
        maxLength={19}
        name="cardNumber"
        value={value}
        placeholder="XXXX-XXXX-XXXX-XXXX"
        required={true}
      />
    </LabeledInput>
  );
};

export default CardNumberInput;
