import { useRef } from 'react';
import { NUMBER_REGEX } from '../../constants/regex';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import * as Styled from './CardPassword.styles';

interface CardPasswordProps {
  password: Record<number, string>;
  setPassword: React.Dispatch<React.SetStateAction<Record<number, string>>>;
}

const CardPassword = ({ password, setPassword }: CardPasswordProps) => {
  const passwordRefs: Record<number, React.RefObject<HTMLInputElement>> = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentOrder = Number(e.target.dataset['order']);

    if (NUMBER_REGEX.test(e.target.value)) {
      return;
    }

    setPassword({ ...password, [currentOrder]: e.target.value });

    if (currentOrder === 0 && password[0].length === 0) {
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
            value={password[0]}
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
            value={password[1]}
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
