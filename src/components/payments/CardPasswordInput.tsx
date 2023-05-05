import { useRef } from 'react';
import styled from 'styled-components';
import { useGroupedFocus } from '../../hooks/useGroupedFocus';
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refs = Array.from({ length: 2 }, () => useRef<HTMLInputElement>(null));
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
          ref={refs[index]}
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
