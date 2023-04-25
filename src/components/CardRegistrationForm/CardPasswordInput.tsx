import { ReactComponent as BlackDot } from '../../assets/black-dot.svg';
import { CARD_FORM_TITLE } from '../../constants';
import PaymentsInput from '../PaymentsInput';
import type { CardInputProps } from './types';

function CardPasswordInput({ getInputListValue, checkValidator, errorMessage, isVisited }: CardInputProps) {
  return (
    <PaymentsInput
      name={CARD_FORM_TITLE.PASSWORD}
      inputListInformation={{
        inputInformation: [
          { type: 'password', textAlign: 'center', minLength: 1, maxLength: 1 },
          {
            type: 'password',
            textAlign: 'center',
            minLength: 1,
            maxLength: 1,
            onBlur: checkValidator,
          },
        ],
        bridgeLetter: '',
        regExp: /[^0-9]/g,
        getInputListValue,
        children: (
          <>
            <div>
              <BlackDot />
            </div>
            <div>
              <BlackDot />
            </div>
          </>
        ),
      }}
      errorMessage={errorMessage}
      isVisited={isVisited}
    />
  );
}

export default CardPasswordInput;
