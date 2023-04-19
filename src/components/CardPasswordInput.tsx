import type { Dispatch } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './common/Input';

const StyledCardPasswordInput = styled.div`
  display: flex;
  gap: 8px;
`;

export const CardPasswordInput = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleCardPasswordChange = (dispatch: Dispatch<string>) => (value: string) => {
    if (!/^\d?$/.test(value)) return;

    dispatch(value);
  };

  return (
    <StyledCardPasswordInput>
      <Input
        value={password1}
        onChange={handleCardPasswordChange(setPassword1)}
        width={5}
        center
        type="password"
      />
      <Input
        value={password2}
        onChange={handleCardPasswordChange(setPassword2)}
        width={5}
        center
        type="password"
      />
      <Input
        value="*"
        onChange={handleCardPasswordChange(setPassword2)}
        width={5}
        center
        type="password"
        disabled
      />
      <Input
        value="*"
        onChange={handleCardPasswordChange(setPassword2)}
        width={5}
        center
        type="password"
        disabled
      />
    </StyledCardPasswordInput>
  );
};
