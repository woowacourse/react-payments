import { ChangeEvent, Dispatch, SetStateAction, useMemo, useRef, VFC } from 'react';
import { CardNumberState } from '../..';
import { LABEL } from '../../../../../constants/addCardForm';
import { CARD_NUMBER_DIGITS, CARD_NUMBER_SEPARATOR } from '../../../../../constants/creditCard';
import Input from '../../../../shared/Input';
import AddCardInputContainer from '../../AddCardInputContainer';
import AddCardInputLabel from '../../AddCardInputLabel';
import { isValidCardNumber } from '../../validator';

interface Props {
  cardNumber: CardNumberState;
  setCardNumber: Dispatch<SetStateAction<CardNumberState>>;
}

const CardNumberInput: VFC<Props> = ({ cardNumber, setCardNumber }) => {
  const secondCardNumberInputRef = useRef<HTMLInputElement>(null);
  const thirdCardNumberInputRef = useRef<HTMLInputElement>(null);
  const fourthCardNumberInputRef = useRef<HTMLInputElement>(null);

  const cardNumberInputInfo = [
    { type: 'text', ref: null },
    { type: 'text', ref: secondCardNumberInputRef },
    { type: 'password', ref: thirdCardNumberInputRef },
    { type: 'password', ref: fourthCardNumberInputRef },
  ];

  const createCardNumberInput = () =>
    cardNumberInputInfo
      .map(({ type, ref }, index) => (
        <Input
          key={index}
          type={type}
          ref={ref}
          textCenter
          maxLength={CARD_NUMBER_DIGITS}
          width="16%"
          value={cardNumber[index]}
          onChange={event => onChangeCardNumber(event, index)}
        />
      ))
      .reduce(
        (acc: JSX.Element[], curr: JSX.Element, index, array: JSX.Element[]) => [
          ...acc,
          <span key={index + array.length}>{CARD_NUMBER_SEPARATOR}</span>,
          curr,
        ],
        []
      )
      .slice(1);

  const cardNumberInput = useMemo(() => createCardNumberInput(), [cardNumberInputInfo]);

  const onChangeCardNumber = ({ target: { value } }: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!isValidCardNumber(value)) return;

    const nextValue: CardNumberState = [...cardNumber];

    nextValue[index] = value;
    setCardNumber(nextValue);

    if (nextValue[index].length === CARD_NUMBER_DIGITS && index < 3) {
      focusNextCardNumberInput(index);
    }
  };

  const focusNextCardNumberInput = (index: number) => {
    const cardNumberInputRefs = [secondCardNumberInputRef, thirdCardNumberInputRef, fourthCardNumberInputRef];

    cardNumberInputRefs[index].current?.focus();
  };

  return (
    <AddCardInputLabel label={LABEL.CARD_NUMBER}>
      <AddCardInputContainer>{cardNumberInput}</AddCardInputContainer>
    </AddCardInputLabel>
  );
};

export default CardNumberInput;
