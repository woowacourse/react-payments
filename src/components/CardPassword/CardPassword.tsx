import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useContext } from 'react';
import * as Styled from './CardPassword.styles';
import { RefContext } from '../../contexts/RefProvider';
import { REF_INDEX } from '../../constants/refIndex';
import CardErrorLabel from '../@common/CardErrorLabel';

interface CardPasswordProps {
  cardPasswords: Array<string>;
  errorMessage: string;
  isValidatedCardPasswords: (order: number, value: string) => boolean;
}

const CardPassword = ({
  cardPasswords,
  errorMessage,
  isValidatedCardPasswords,
}: CardPasswordProps) => {
  const cardRefs = useContext(RefContext);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentOrder = Number(e.target.dataset['order']);

    if (
      !isValidatedCardPasswords(
        currentOrder - REF_INDEX.lastSecurityCodeOrder,
        e.target.value
      )
    ) {
      return;
    }

    focusNextInput(currentOrder);
  };

  const focusNextInput = (currentOrder: number) => {
    if (currentOrder === 8 && cardPasswords[0].length === 0) {
      cardRefs[currentOrder + 1].current?.focus();
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
            ref={cardRefs[8]}
            onChange={handleCardInputChange}
            value={cardPasswords[0]}
            order={8}
            placeholder="•"
            required={true}
            inputMode="numeric"
          />
        </Styled.PasswordInputWrapper>
        <Styled.PasswordInputWrapper>
          <CardInput
            type="password"
            maxLength={1}
            ref={cardRefs[9]}
            onChange={handleCardInputChange}
            value={cardPasswords[1]}
            order={9}
            placeholder="•"
            required={true}
            inputMode="numeric"
          />
        </Styled.PasswordInputWrapper>
        <Styled.Paragraph>•</Styled.Paragraph>
        <Styled.Paragraph>•</Styled.Paragraph>
      </Styled.Wrapper>
      <CardErrorLabel errorMessage={errorMessage} />
    </>
  );
};

export default CardPassword;
