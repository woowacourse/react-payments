import { useRef } from 'react';
import styled from 'styled-components';
import { useFocusChain } from '../hooks/useFocusChain';
import { Input } from './common/Input';

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
    if (!/^\d?$/.test(newValue)) return;

    if (/^\d$/.test(newValue)) next();

    const password = Array.from(value);
    password[index] = newValue;

    onChange(password.join(''));
  };

  return (
    <StyledCardPasswordInput>
      <Input
        ref={password1Ref}
        value={value[0] ?? ''}
        onChange={handleCardPasswordChange(0)}
        width={5}
        center
        type="password"
      />
      <Input
        ref={password2Ref}
        value={value[1] ?? ''}
        onChange={handleCardPasswordChange(1)}
        width={5}
        center
        type="password"
      />
      <Input value="*" width={5} center type="password" disabled />
      <Input value="*" width={5} center type="password" disabled />
    </StyledCardPasswordInput>
  );
};
