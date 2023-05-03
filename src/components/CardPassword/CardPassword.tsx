import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useContext } from 'react';
import * as Styled from './CardPassword.styles';
import { RefContext } from '../../contexts/RefProvider';
import { REF_INDEX } from '../../constants/refIndex';

interface CardPasswordProps {
  cardPasswords: Array<string>;
  errorMessage: string;
  handleCardPasswords: (order: number, value: string) => void;
}

const CardPassword = ({
  cardPasswords,
  errorMessage,
  handleCardPasswords,
}: CardPasswordProps) => {
  const cardRefs = useContext(RefContext);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentOrder = Number(e.target.dataset['order']);

    handleCardPasswords(
      currentOrder - REF_INDEX.lastSecurityCodeOrder,
      e.target.value
    );

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
          />
        </Styled.PasswordInputWrapper>
        <Styled.Paragraph>•</Styled.Paragraph>
        <Styled.Paragraph>•</Styled.Paragraph>
      </Styled.Wrapper>
      <Styled.ErrorTextWrapper>{errorMessage}</Styled.ErrorTextWrapper>
    </>
  );
};

export default CardPassword;
