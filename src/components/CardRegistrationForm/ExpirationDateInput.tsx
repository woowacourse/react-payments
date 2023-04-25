import { CARD_FORM_TITLE } from '../../constants';
import PaymentsInput from '../PaymentsInput';
import type { CardInputProps } from './types';

function ExpirationDateInput({ getInputListValue, checkValidator, errorMessage, isVisited }: CardInputProps) {
  return (
    <PaymentsInput
      name={CARD_FORM_TITLE.EXPIRATION_DATE}
      inputListInformation={{
        inputInformation: [
          { type: 'string', minLength: 2, maxLength: 2, textAlign: 'center', placeholder: 'MM' },
          {
            type: 'string',
            minLength: 2,
            maxLength: 2,
            textAlign: 'center',
            placeholder: 'YY',
            onBlur: checkValidator,
          },
        ],
        bridgeLetter: '/',
        regExp: /[^0-9]/g,
        getInputListValue,
      }}
      errorMessage={errorMessage}
      isVisited={isVisited}
    />
  );
}

export default ExpirationDateInput;
