import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import styled from 'styled-components';
import { useRef } from 'react';
import { REG_EXP } from '../../constants/regexp';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
  margin-bottom: 20px;
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  align-items: baseline;

  > * {
    width: 45px;
    margin-right: 8px;
  }
`;

const Pargraph = styled.p`
  width: 45px;
  text-align: center;
`;

interface CardPasswordProps {
  passwords: Array<string>;
  setPasswords: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const CardPassword = ({ passwords, setPasswords }: CardPasswordProps) => {
  const passwordRefs: Record<number, React.RefObject<HTMLInputElement>> = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentOrder = Number(e.target.dataset['order']);

    if (REG_EXP.cardNumberLimit.test(e.target.value)) {
      return;
    }

    setPasswords({ ...passwords, [currentOrder]: e.target.value });

    if (currentOrder === 0 && passwords[0].length === 0) {
      passwordRefs[currentOrder + 1].current?.focus();
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
            ref={passwordRefs[0]}
            onChange={handleCardInputChange}
            value={passwords[0]}
            order={0}
            placeholder="•"
            required={true}
          />
        </Wrapper>
        <Wrapper>
          <CardInput
            type="password"
            maxLength={1}
            ref={passwordRefs[1]}
            onChange={handleCardInputChange}
            value={passwords[1]}
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
