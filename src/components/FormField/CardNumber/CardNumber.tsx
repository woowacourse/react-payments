import FormField from '../FormField';
import Input from '../../Input/Input';
import InputField from '../../InputField/InputField';
import { CardNumberStateType } from '../../../hooks/useCardNumber';
import MESSAGE from '../../../constants/Message';
import CONDITION from '../../../constants/Condition';

const { PLACEHOLDER, TITLE, CAPTION, LABEL } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface CardNumberProps {
  cardNumberState: CardNumberStateType;
}

const CardNumber = ({ cardNumberState }: CardNumberProps) => {
  const { firstState, secondState, thirdState, fourthState } = cardNumberState;
  const cardNumberStates = [firstState, secondState, thirdState, fourthState];
  const cardNumberInputs = cardNumberStates.map((state, index) => (
    <Input
      placeholder={PLACEHOLDER.cardNumber}
      value={state.value}
      maxLength={MAX_LENGTH.cardNumber}
      onChange={state.setValue}
      invalid={state.isError}
      autoFocus={index === 0 ? true : undefined}
    />
  ));

  return (
    <FormField title={TITLE.cardNumber} caption={CAPTION.cardNumber}>
      <InputField label={LABEL.cardNumber} error={cardNumberState.errorMessage}>
        <>{cardNumberInputs}</>
      </InputField>
    </FormField>
  );
};

export default CardNumber;
