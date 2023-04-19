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

const PasswordInputWrapper = styled.div`
  display: flex;
  align-items: center;

  > * {
    width: 45px;
    margin-right: 8px;
  }
`;

const Pargraph = styled.p`
  width: 45px;
  text-align: center;
`;

interface RefType {
  [key: number]: React.RefObject<HTMLInputElement>;
}

interface PasswordType {
  [key: number]: string;
}

const CardPassword = () => {
  const refObject: RefType = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
  };

  const [password, setPassword] = useState<PasswordType>({
    0: '',
    1: '',
  });

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentOrder = Number(e.target.dataset['order']);

    if (/[^0-9]/g.test(e.target.value)) {
      return;
    }

    setPassword({ ...password, [currentOrder]: e.target.value });

    if (currentOrder === 0 && password[0].length === 0) {
      refObject[currentOrder + 1].current?.focus();
    }
  };

  return (
    <>
      <CardLabel labelText="카드 비밀번호" />
      <PasswordInputWrapper>
        <Wrapper>
          <CardInput
            type="password"
            maxLength={1}
            ref={refObject[0]}
            onChange={handleCardInputChange}
            value={password[0]}
            order={0}
            placeholder="•"
            required={true}
          />
        </Wrapper>
        <Wrapper>
          <CardInput
            type="password"
            maxLength={1}
            ref={refObject[1]}
            onChange={handleCardInputChange}
            value={password[1]}
            order={1}
            placeholder="•"
            required={true}
          />
        </Wrapper>
        <Pargraph>•</Pargraph>
        <Pargraph>•</Pargraph>
      </PasswordInputWrapper>
    </>
  );
};

export default CardPassword;
