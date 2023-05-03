import { useRef } from 'react';
import styled from 'styled-components';
import { useGroupedFocus } from '../../hooks/useGroupedFocus';
import { NumberInput } from '../common/NumberInput';

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
  masks?: [boolean, boolean, boolean, boolean];
};

export const CardNumberInput = (props: CardNumberInputProps) => {
  const { value, onChange, masks = [false, false, true, true] } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refs = Array.from({ length: 4 }, () => useRef<HTMLInputElement>(null));
  const { focusNext } = useGroupedFocus(refs);

  const getPartialCardNumber = (index: number) => {
    return value.split('-')[index] ?? '';
  };

  const handleCardNumberChange = (index: number) => (newValue: string) => {
    if (newValue.length === 4) focusNext();

    const partialCardNumbers = value.split('-');
    partialCardNumbers[index] = newValue;

    onChange(partialCardNumbers.join('-'));
  };

  return (
    <StyledCardNumberInput>
      {([0, 1, 2, 3] as const).map((index) => (
        <NumberInput
          key={index}
          ref={refs[index]}
          type={masks[index] ? 'password' : 'text'}
          maxCount={4}
          value={getPartialCardNumber(index)}
          onChange={handleCardNumberChange(index)}
          center
        />
      ))}
    </StyledCardNumberInput>
  );
};
