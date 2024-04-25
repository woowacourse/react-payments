import SequenceContainer from '../common/SequenceContainer';
import CardNumbersInputContainer from './CardNumbersInputContainer';
import CardExpiryDateInputContainer from './CardExpiryDateInputContainer';
import CardholderNameInputContainer from './CardholderNameInputContainer';
import CvcInputContainer from './CvcInputContainer';
import PasswordInputContainer from './PasswordInputContainer';
import { ICardInfoInputsControl } from '../../hooks/useCardInfo/useCardInfoInputs';
import { ICardInfoCompletionStatus } from '../../hooks/useCardInfo/useCardInfoCompletionStatus';

export interface ICardInfoFormProps {
  cardInfoControl: ICardInfoInputsControl;
  completionStatus: ICardInfoCompletionStatus;
}

export default function CardInfoForm({ cardInfoControl, completionStatus }: ICardInfoFormProps) {
  const { cardNumbers, expiryDate, cardholderName, cvc, password } = cardInfoControl;

  const completionFlags = Object.values(completionStatus);
  const isSubmitable = completionFlags.every(v => v);

  return (
    <div>
      {isSubmitable && <button>Submit</button>}
      <SequenceContainer
        predicates={completionFlags}
        componentQueue={[
          <CardNumbersInputContainer {...cardNumbers} />,
          <CardExpiryDateInputContainer {...expiryDate} />,
          <CardholderNameInputContainer {...cardholderName} />,
          <CvcInputContainer {...cvc} />,
          <PasswordInputContainer {...password} />,
        ]}
      />
    </div>
  );
}
