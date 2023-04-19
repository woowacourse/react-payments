import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import styled from 'styled-components';
import { useRef, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
`;

const SecurityCode = () => {
  const [securityCode, setSecurityCode] = useState('');
  const securityCodeRef = useRef<HTMLInputElement>(null);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (/[^0-9]/g.test(e.target.value)) return;

    setSecurityCode(e.target.value);
  };

  return (
    <>
      <CardLabel labelText="보안 코드(CVC/CVV)" />
      <Wrapper>
        <CardInput
          type="password"
          maxLength={3}
          ref={securityCodeRef}
          onChange={handleCardInputChange}
          value={securityCode}
          placeholder="•••"
          required={false}
        />
      </Wrapper>
    </>
  );
};

export default SecurityCode;
