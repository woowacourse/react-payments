import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useContext } from 'react';
import * as Styled from './CardPassword.styles';
import { RefContext } from '../../contexts/RefProvider';
import { REF_INDEX } from '../../constants/refIndex';
import CardErrorLabel from '../@common/CardErrorLabel';
import { CardPasswordType } from '../../types/general';

interface CardPasswordProps {
  cardPasswords: CardPasswordType;
  errorMessage: string;
  isValidatedCardPasswords: (order: number, value: string) => boolean;
}

const CardPassword = ({
  cardPasswords,
  errorMessage,
  isValidatedCardPasswords,
}: CardPasswordProps) => {
  const { inputRefs: cardRefs, focusNextInput } = useContext(RefContext);

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

    if (currentOrder === 9) {
      focusNextInput(currentOrder, 1, true);
      return;
    }

    focusNextInput(currentOrder, 1);
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
