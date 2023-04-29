import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useRef } from 'react';
import * as Styled from './CardPassword.styles';
interface CardPasswordProps {
  passwords: Array<string>;
  isSetPasswords: (order: number, value: string) => boolean;
}

const CardPassword = ({ passwords, isSetPasswords }: CardPasswordProps) => {
  const passwordRefs: Record<number, React.RefObject<HTMLInputElement>> = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentOrder = Number(e.target.dataset['order']);

    isSetPasswords(currentOrder, e.target.value);

    if (currentOrder === 0 && passwords[0].length === 0) {
      passwordRefs[currentOrder + 1].current?.focus();
    }
  };

  return (
    <>
      <CardLabel labelText="카드 비밀번호" />
      <Styled.Wrapper>
        <Styled.PasswordInputWrapper>
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
        </Styled.PasswordInputWrapper>
        <Styled.PasswordInputWrapper>
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
        </Styled.PasswordInputWrapper>
        <Styled.Pargraph>•</Styled.Pargraph>
        <Styled.Pargraph>•</Styled.Pargraph>
      </Styled.Wrapper>
    </>
  );
};

export default CardPassword;
