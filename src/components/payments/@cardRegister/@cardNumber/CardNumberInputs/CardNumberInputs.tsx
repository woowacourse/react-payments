import { CardNumberTextFieldProps } from '@components/payments/@cardRegister/@cardNumber/CardNumberTextField/CardNumberTextField';

import CardNumberInput from '@components/payments/@cardRegister/@cardNumber/CardNumberInput/CardNumberInput';

import { useFocusInputs, useUUID } from '@hooks/index';

const CardNumberInputs: React.FC<
  Pick<CardNumberTextFieldProps, 'cardNumbers' | 'onAddCardNumber' | 'cardNumberError'>
> = ({ cardNumbers, onAddCardNumber, cardNumberError }) => {
  const { current: uuids } = useUUID(cardNumbers.length);
  const { inputsRef, focusInputByIndex } = useFocusInputs(cardNumbers.length);

  return (
    <>
      {cardNumbers.map((cardNumber, index) => (
        <CardNumberInput
          key={uuids[index]}
          id={index === 0 ? 'cardNumber' : ''}
          isError={cardNumberError.errorConditions[index]}
          value={cardNumber}
          refCallback={(element) => {
            inputsRef.current[index] = element;
          }}
          onAddCardNumber={(event) => {
            onAddCardNumber(index, event.target.value);
            if (event.target.value.replace(/\D/g, '').length === event.target.maxLength) focusInputByIndex(index + 1);
          }}
        />
      ))}
    </>
  );
};

export default CardNumberInputs;
