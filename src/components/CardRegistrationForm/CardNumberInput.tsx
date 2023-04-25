import { CARD_FORM_TITLE } from '../../constants';
import PaymentsInput from '../PaymentsInput';
import type { CardInputProps } from './types';

function CardNumberInput({ getInputListValue, checkValidator, errorMessage, isVisited }: CardInputProps) {
  return (
    <PaymentsInput
      name={CARD_FORM_TITLE.NUMBER}
      inputListInformation={{
        inputInformation: [
          { type: 'string', minLength: 4, maxLength: 4, textAlign: 'center', placeholder: '1234' },
          { type: 'string', minLength: 4, maxLength: 4, textAlign: 'center', placeholder: '1234' },
          {
            type: 'password',
            minLength: 4,
            maxLength: 4,
            textAlign: 'center',
            placeholder: '1234',
          },
          {
            type: 'password',
            minLength: 4,
            maxLength: 4,
            textAlign: 'center',
            placeholder: '1234',
            onBlur: checkValidator,
          },
        ],
        bridgeLetter: '-',
        regExp: /[^0-9]/g,
        getInputListValue,
      }}
      errorMessage={errorMessage}
      isVisited={isVisited}
    />
  );
}

export default CardNumberInput;
