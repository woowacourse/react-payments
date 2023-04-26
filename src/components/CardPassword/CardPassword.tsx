import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useRef } from 'react';
import * as Styled from './CardPassword.styles';
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

    if (/[^0-9]/g.test(e.target.value)) {
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
      <Styled.PasswordInputWrapper>
        <Styled.Wrapper>
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
        </Styled.Wrapper>
        <Styled.Wrapper>
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
        </Styled.Wrapper>
        <Styled.Pargraph>•</Styled.Pargraph>
        <Styled.Pargraph>•</Styled.Pargraph>
      </Styled.PasswordInputWrapper>
    </>
  );
};

export default CardPassword;
