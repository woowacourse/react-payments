import AddCardInputLabel from '../AddCardInputLabel';
import { AddCardInputContainer } from '../styles';
import { LABEL } from '../../../../constants/addCardForm';
import { forwardRef, useMemo, useRef, VFC } from 'react';
import { CARD_NUMBER_SEPARATOR, CARD_NUMBER_DIGITS } from '../../../../constants/creditCard';
import { ALERT } from '../../../../constants/messages';
import Input from '../../../shared/Input';
import { CardNumberState } from '../../AddCardForm';
import { isValidCardNumber } from '../validator';
import { RouteComponentProps, withRouter } from 'react-router';
import VirtualKeyboardNumberInput from '../../../shared/VirtualKeyboardInput';

interface CardNumberInputProps {
  index: number;
  type: string;
  onChange: (value: string, index: number) => void;
  cardNumber: CardNumberState;
}

const CardNumberInput = forwardRef<HTMLInputElement, CardNumberInputProps>(
  ({ index, type, onChange, cardNumber }, ref) =>
    type === 'text' ? (
      <Input
        type={type}
        ref={ref}
        textCenter
        maxLength={CARD_NUMBER_DIGITS}
        width="16%"
        value={cardNumber[index]}
        onChange={({ target: { value } }) => onChange(value, index)}
      />
    ) : (
      <VirtualKeyboardNumberInput
        type={type}
        ref={ref}
        maxLength={CARD_NUMBER_DIGITS}
        textCenter
        width="16%"
        value={cardNumber[index]}
        onChange={value => onChange(value, index)}
      />
    )
);

interface CardNumberInputsProps extends RouteComponentProps {
  cardNumber: CardNumberState;
  setCardNumber: (cardNumber: CardNumberState) => void;
}

type CardNumberInputRefsIndex = 0 | 1 | 2;

const isInCardNumberInputRefsIndex = (index: number): index is CardNumberInputRefsIndex => {
  return index >= 0 && index < 3;
};

const CardNumberInputs: VFC<CardNumberInputsProps> = ({ cardNumber, setCardNumber, history }) => {
  const secondCardNumberInputRef = useRef<HTMLInputElement>(null);
  const thirdCardNumberInputRef = useRef<HTMLInputElement>(null);
  const fourthCardNumberInputRef = useRef<HTMLInputElement>(null);

  const focusNextCardNumberInput = (index: CardNumberInputRefsIndex) => {
    const cardNumberInputRefs = [secondCardNumberInputRef, thirdCardNumberInputRef, fourthCardNumberInputRef];
    cardNumberInputRefs[index].current?.focus();
  };

  const onChangeCardNumber = (value: string, index: number) => {
    if (!isValidCardNumber(value)) return;

    const nextValue: CardNumberState = [...cardNumber];

    try {
      nextValue[index] = value;
    } catch (error) {
      console.error('Segmentation Fault: invalid index - ' + error);
      alert(ALERT.SYSTEM_ERROR);
      history.replace('/');
      return;
    }

    setCardNumber(nextValue);

    if (nextValue[index].length === CARD_NUMBER_DIGITS && isInCardNumberInputRefsIndex(index)) {
      focusNextCardNumberInput(index);
    }
  };

  const CardNumberInputData = useMemo(
    () => [
      { type: 'text', ref: null },
      { type: 'text', ref: secondCardNumberInputRef },
      { type: 'password', ref: thirdCardNumberInputRef },
      { type: 'password', ref: fourthCardNumberInputRef },
    ],
    [secondCardNumberInputRef, thirdCardNumberInputRef, fourthCardNumberInputRef]
  );

  const generateCardNumberInputs = () =>
    CardNumberInputData.reduce<React.ReactNode[]>(
      (acc, { type, ref }, index, array) => [
        ...acc,
        !!index && <span key={index + array.length}>{CARD_NUMBER_SEPARATOR}</span>,
        <CardNumberInput
          key={index}
          index={index}
          type={type}
          ref={ref}
          cardNumber={cardNumber}
          onChange={value => onChangeCardNumber(value, index)}
        />,
      ],
      []
    );

  return (
    <AddCardInputLabel label={LABEL.CARD_NUMBER}>
      <AddCardInputContainer>{generateCardNumberInputs()}</AddCardInputContainer>
    </AddCardInputLabel>
  );
};

export default withRouter(CardNumberInputs);
