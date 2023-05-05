import LabeledInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';
import { useContext } from 'react';
import { CardInfoContext } from '../../../contexts/CardInfoProvider';
import { checkOwnerNameLength } from '../../../domains/validators';
import useInputUpdater from '../../../hooks/useInputUpdater';

const CardOwnerName = () => {
  const { cardOwnerName, setCardOwnerName } = useContext(CardInfoContext);
  const { inputValue, errorMessage, setInputValueWithValidation } = useInputUpdater({
    initialValue: cardOwnerName.value,
    validator: checkOwnerNameLength,
    contextSetter: setCardOwnerName,
  });

  return (
    <LabeledInput
      title="카드 소유자 이름 (선택)"
      errorMessage={errorMessage}
      numberOfLetter={{ current: inputValue.length, max: 30 }}
    >
      <Input
        width="100%"
        onChange={setInputValueWithValidation}
        maxLength={30}
        value={inputValue}
        name="cardOwnerName"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </LabeledInput>
  );
};

export default CardOwnerName;
