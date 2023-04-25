import { CARD_FORM_TITLE, SECURITY_CODE_HELP } from '../../constants';
import PaymentsInput from '../PaymentsInput';
import QuestionToolTip from '../QuestionToolTip';
import type { CardInputProps } from './types';

function SecurityCodeInput({ getInputListValue, checkValidator, errorMessage, isVisited }: CardInputProps) {
  return (
    <PaymentsInput
      name={CARD_FORM_TITLE.SECURITY_CODE}
      inputListInformation={{
        inputInformation: [
          {
            type: 'password',
            textAlign: 'center',
            minLength: 3,
            maxLength: 3,
            onBlur: checkValidator,
          },
        ],
        regExp: /[^0-9]/g,
        getInputListValue,
        children: <QuestionToolTip questionMessage={SECURITY_CODE_HELP} />,
      }}
      errorMessage={errorMessage}
      isVisited={isVisited}
    />
  );
}

export default SecurityCodeInput;
