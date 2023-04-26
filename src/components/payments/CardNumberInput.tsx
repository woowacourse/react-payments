import styled from 'styled-components';
import { useGroupedFocus } from '../../hooks/useGroupedFocus';
import { useGroupedRef } from '../../hooks/useGroupedRef';
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
};

export const CardNumberInput = (props: CardNumberInputProps) => {
  const { value, onChange } = props;

  const { refs, getRef } =
    useGroupedRef<[HTMLInputElement, HTMLInputElement, HTMLInputElement, HTMLInputElement]>(4);
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
          ref={getRef(index)}
          maxCount={4}
          value={getPartialCardNumber(index)}
          onChange={handleCardNumberChange(index)}
          center
        />
      ))}
    </StyledCardNumberInput>
  );
};
