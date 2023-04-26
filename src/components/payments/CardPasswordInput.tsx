import styled from 'styled-components';
import { useGroupedFocus } from '../../hooks/useGroupedFocus';
import { useGroupedRef } from '../../hooks/useGroupedRef';
import { NumberInput } from '../common/NumberInput';

const StyledCardPasswordInput = styled.div`
  display: flex;
  gap: 8px;
`;

type CardPasswordInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const CardPasswordInput = (props: CardPasswordInputProps) => {
  const { value, onChange } = props;

  const { refs, getRef } = useGroupedRef<[HTMLInputElement, HTMLInputElement]>(2);
  const { focusNext } = useGroupedFocus(refs);

  const handleCardPasswordChange = (index: number) => (newValue: string) => {
    if (newValue.length === 1) focusNext();

    const password = Array.from(value);
    password[index] = newValue;

    onChange(password.join(''));
  };

  return (
    <StyledCardPasswordInput>
      {([0, 1] as const).map((index) => (
        <NumberInput
          key={index}
          ref={getRef(index)}
          type="password"
          maxCount={1}
          value={value[index] ?? ''}
          onChange={handleCardPasswordChange(index)}
          width={5}
          center
        />
      ))}
      <NumberInput value="*" width={5} center type="password" disabled />
      <NumberInput value="*" width={5} center type="password" disabled />
    </StyledCardPasswordInput>
  );
};
