import { checkValidCardNumber } from '../validators';
import { addHyphensInCardNumber } from '../replacers';
import useValidator from '../../../hooks/useValidator';
import LabeledInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';
import { useEffect } from 'react';
import type { FormInputValueType } from '../../../types';

type CardNumberInputProps = {
  updateCardNumber: (cardNumber: FormInputValueType) => void;
};

const CardNumberInput = ({ updateCardNumber }: CardNumberInputProps) => {
  const { value, isValid, errorMessage, setValueWithValidation } = useValidator(checkValidCardNumber);

  const setCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = event.target.value;
    const cardNumberWithHyphens = addHyphensInCardNumber(cardNumber);

    setValueWithValidation(cardNumberWithHyphens);
  };

  useEffect(() => {
    updateCardNumber({ isValid: isValid, value: value });
  }, [value, isValid, updateCardNumber]);

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
