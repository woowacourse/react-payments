import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import type { InputType } from '../../../hooks/useInput';
import { isNumber } from '../../../utils/validation';
import { CARD_CVC } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardCVCInputProps {
  cvc: InputType;
  handleIsCVCInput: (isCVCInput: boolean) => void;
}

const CardCVCInput = ({ cvc, handleIsCVCInput }: CardCVCInputProps) => {
  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    cvc.handleValue(e.target.value);
  };

  const errorMessage = cvc.isError ? ERROR_MESSAGE.INVALID_CARD_CVC : '';

  return (
    <div>
      <TitleContainer title="CVC 번호를 입력해 주세요" />
      <InputField label="CVC" inputCount={CARD_CVC.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        <Input
          isValid={!cvc.isError}
          type="text"
          placeholder="123"
          value={cvc.value}
          maxLength={CARD_CVC.MAX_LENGTH}
          onFocus={() => handleIsCVCInput(true)}
          onBlur={() => handleIsCVCInput(false)}
          onChange={handleCVCChange}
          autoFocus
        />
      </InputField>
    </div>
  );
};

export default CardCVCInput;
