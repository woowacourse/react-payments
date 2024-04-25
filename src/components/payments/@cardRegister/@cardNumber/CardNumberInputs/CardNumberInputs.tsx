import { CardNumberTextFieldProps } from '@components/payments/@cardRegister/@cardNumber/CardNumberTextField/CardNumberTextField';

import CardNumberInput from '@components/payments/@cardRegister/@cardNumber/CardNumberInput/CardNumberInput';

import { useAutofocusElements, useUUID } from '@hooks/index';

const CardNumberInputs: React.FC<
  Pick<CardNumberTextFieldProps, 'cardNumbers' | 'onAddCardNumber' | 'cardNumberError'>
> = ({ cardNumbers, onAddCardNumber, cardNumberError }) => {
  const { current: uuids } = useUUID(cardNumbers.length);
  const { handleAddElementsInRef, focusElementByIndex } = useAutofocusElements<HTMLInputElement>(cardNumbers.length);

  return (
    <>
      {cardNumbers.map((cardNumber, index) => (
        <CardNumberInput
          key={uuids[index]}
          id={index === 0 ? 'cardNumber' : ''}
          isError={cardNumberError.errorConditions[index]}
          value={cardNumber}
          refCallback={(element) => handleAddElementsInRef(element, index)}
          onAddCardNumber={(event) => {
            onAddCardNumber(index, event.target.value);
            if (event.target.value.replace(/\D/g, '').length === event.target.maxLength) focusElementByIndex(index + 1);
          }}
        />
      ))}
    </>
  );
};

export default CardNumberInputs;
