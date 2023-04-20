import { useRef } from 'react';
import styled from 'styled-components';
import { useFocusChain } from '../hooks/useFocusChain';
import { Input } from './common/Input';

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
    return value.slice(index * 4, (index + 1) * 4);
  };

  const handleCardNumberChange = (index: number) => (newValue: string) => {
    if (!/^\d{0,4}$/.test(newValue)) return;

    if (/^\d{4}$/.test(newValue)) next();

    const partialCardNumbers = [0, 1, 2, 3].map(getPartialCardNumber);
    partialCardNumbers[index] = newValue;

    onChange(partialCardNumbers.join(''));
  };

  return (
    <StyledCardNumberInput>
      <Input
        ref={cardNumberRef1}
        value={getPartialCardNumber(0)}
        onChange={handleCardNumberChange(0)}
        center
      />
      <Input
        ref={cardNumberRef2}
        value={getPartialCardNumber(1)}
        onChange={handleCardNumberChange(1)}
        center
      />
      <Input
        ref={cardNumberRef3}
        value={getPartialCardNumber(2)}
        onChange={handleCardNumberChange(2)}
        center
        type="password"
      />
      <Input
        ref={cardNumberRef4}
        value={getPartialCardNumber(3)}
        onChange={handleCardNumberChange(3)}
        center
        type="password"
      />
    </StyledCardNumberInput>
  );
};
