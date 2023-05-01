import { useRef } from 'react';
import styled from 'styled-components';
import { useFocusChain } from '../hooks/useFocusChain';
import { NumberInput } from './common/NumberInput';

const StyledCardNumberInput = styled.div`
  display: flex;
  gap: 8px;

  & > * {
    flex: 1;
  }
`;

type CardNumberInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const CardNumberInput = (props: CardNumberInputProps) => {
  const { value, onChange } = props;

  const cardNumberRef1 = useRef<HTMLInputElement>(null);
  const cardNumberRef2 = useRef<HTMLInputElement>(null);
  const cardNumberRef3 = useRef<HTMLInputElement>(null);
  const cardNumberRef4 = useRef<HTMLInputElement>(null);

  const { next } = useFocusChain([cardNumberRef1, cardNumberRef2, cardNumberRef3, cardNumberRef4]);

  const getPartialCardNumber = (index: number) => {
    return value.split('-')[index] ?? '';
  };

  const handleCardNumberChange = (index: number) => (newValue: string) => {
    if (newValue.length === 4) next();

    const partialCardNumbers = value.split('-');
    partialCardNumbers[index] = newValue;

    onChange(partialCardNumbers.join('-'));
  };

  return (
    <StyledCardNumberInput>
      <NumberInput
        ref={cardNumberRef1}
        maxCount={4}
        value={getPartialCardNumber(0)}
        handleOnChange={handleCardNumberChange(0)}
        center
      />
      <NumberInput
        ref={cardNumberRef2}
        maxCount={4}
        value={getPartialCardNumber(1)}
        handleOnChange={handleCardNumberChange(1)}
        center
      />
      <NumberInput
        ref={cardNumberRef3}
        maxCount={4}
        value={getPartialCardNumber(2)}
        handleOnChange={handleCardNumberChange(2)}
        center
        type="password"
      />
      <NumberInput
        ref={cardNumberRef4}
        maxCount={4}
        value={getPartialCardNumber(3)}
        handleOnChange={handleCardNumberChange(3)}
        center
        type="password"
      />
    </StyledCardNumberInput>
  );
};
