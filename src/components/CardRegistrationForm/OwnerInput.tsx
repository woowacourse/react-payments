import { CARD_FORM_TITLE } from '../../constants';
import PaymentsInput from '../PaymentsInput';
import type { CardInputProps } from './types';

function OwnerInput({ getInputListValue, errorMessage, isVisited }: CardInputProps) {
  return (
    <PaymentsInput
      name={CARD_FORM_TITLE.OWNER}
      inputListInformation={{
        inputInformation: [{ type: 'string', maxLength: 30, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' }],
        regExp: /[^a-z|A-Z]/g,
        getInputListValue,
      }}
      errorMessage={errorMessage}
      isVisited={isVisited}
      showNumberOfValue
    />
  );
}

export default OwnerInput;
