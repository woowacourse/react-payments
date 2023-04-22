import { useRef } from 'react';
import styled from 'styled-components';
import { useFocusChain } from '../hooks/useFocusChain';
import { NumberInput } from './common/NumberInput';

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

  const password1Ref = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);

  const { next } = useFocusChain([password1Ref, password2Ref]);

  const handleCardPasswordChange = (index: number) => (newValue: string) => {
    if (newValue.length === 1) next();

    const password = Array.from(value);
    password[index] = newValue;

    onChange(password.join(''));
  };

  return (
    <StyledCardPasswordInput>
      <NumberInput
        ref={password1Ref}
        maxCount={1}
        value={value[0] ?? ''}
        onChange={handleCardPasswordChange(0)}
        width={5}
        center
        type="password"
      />
      <NumberInput
        ref={password2Ref}
        maxCount={1}
        value={value[1] ?? ''}
        onChange={handleCardPasswordChange(1)}
        width={5}
        center
        type="password"
      />
      <NumberInput value="*" width={5} center type="password" disabled />
      <NumberInput value="*" width={5} center type="password" disabled />
    </StyledCardPasswordInput>
  );
};
