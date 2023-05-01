import { ForwardedRef, forwardRef, RefObject, useRef } from 'react';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import * as Styled from './CardPassword.styles';

interface CardPasswordProps {
  password: Record<number, string>;
  checkPassword: (order: number, value: string) => boolean;
}

const CardPassword = forwardRef(
  (
    { password, checkPassword }: CardPasswordProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const passwordRefs: Record<number, RefObject<HTMLInputElement>> = {
      0: ref as RefObject<HTMLInputElement>,
      1: useRef<HTMLInputElement>(null),
    };

    const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentOrder = Number(e.target.dataset['order']);

      if (!checkPassword(currentOrder, e.target.value)) return;
      if (currentOrder === 1) return;
      focusNext(currentOrder);
    };

    const focusNext = (currentOrder: number) => {
      passwordRefs[currentOrder + 1].current?.focus();
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
  }
);

export default CardPassword;
