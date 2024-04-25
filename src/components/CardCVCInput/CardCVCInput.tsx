import TitleContainer from '../common/TitleContainer/TitleContainer';
import InputField from '../common/InputField/InputField';
import Input from '../common/Input/Input';

import { CARD_CVC } from '../../constants/conditions';

interface CardCVCInputProps {
  isCVCValid: { isValid: boolean; errorMessage: string };
  onChangeCVC: (value: string) => void;
  onChangeFocusCVC: (isFocus: boolean) => void;
}

export default function CardCVCInput({ isCVCValid, onChangeCVC, onChangeFocusCVC }: CardCVCInputProps) {
  const handleChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(CARD_CVC.INVALID_CHARS_REGEX, '');
    if (e.target.value.length > CARD_CVC.MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, CARD_CVC.MAX_LENGTH);
      return;
    }

    onChangeCVC(e.target.value);
  };

  const handleChangeFocusCVC = (e: React.FocusEvent<HTMLInputElement>) => {
    onChangeFocusCVC(e.type === 'focus');
  };

  return (
    <div>
      <TitleContainer title="CVC 번호를 입력해 주세요" />
      <InputField label="CVC" errorMessage={isCVCValid.errorMessage}>
        <Input
          type="text"
          placeholder="123"
          maxLength={CARD_CVC.MAX_LENGTH}
          onChange={handleChangeCVC}
          onFocus={handleChangeFocusCVC}
          onBlur={handleChangeFocusCVC}
          isValid={isCVCValid.isValid}
        />
      </InputField>
    </div>
  );
}
