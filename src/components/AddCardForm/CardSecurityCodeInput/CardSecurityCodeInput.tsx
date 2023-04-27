import { useContext } from 'react';
import { checkValidCVC } from '../validators';
import { CardInfoContext } from '../../../CardInfoProvider';
import HelpButton from '../../common/HelpButton/HelpButton';
import Input from '../../common/Input/Input';
import LabeledInput from '../LabeledInput/LabeledInput';
import useInputUpdater from '../../../hooks/useInputUpdater';

const CardSecurityCodeInput = () => {
  const { setCardSecurityCode } = useContext(CardInfoContext);
  const { inputValue, errorMessage, setInputValueWithValidation } = useInputUpdater({
    validator: checkValidCVC,
    contextSetter: setCardSecurityCode,
  });

  return (
    <LabeledInput title="보안 코드(CVC/CVV)" errorMessage={errorMessage}>
      <Input
        width="30%"
        onChange={setInputValueWithValidation}
        maxLength={3}
        value={inputValue}
        name="cardSecurityCode"
        required={true}
        type="password"
      />
      <HelpButton message="보안 코드(CVC/CVV)는 신용카드나 체크카드의 뒷면에 있는 3자리의 번호입니다." />
    </LabeledInput>
  );
};

export default CardSecurityCodeInput;
