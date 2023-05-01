import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useContext } from 'react';
import * as Styled from './CardPassword.styles';
import { RefContext } from '../../contexts/RefProvider';
interface CardPasswordProps {
  passwords: Array<string>;
  isSetPasswords: (order: number, value: string) => boolean;
}

const CardPassword = ({ passwords, isSetPasswords }: CardPasswordProps) => {
  const cardRefs = useContext(RefContext);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentOrder = Number(e.target.dataset['order']);

    isSetPasswords(currentOrder - 8, e.target.value);

    focusNextInput(currentOrder);
  };

  const focusNextInput = (currentOrder: number) => {
    if (currentOrder === 8 && passwords[0].length === 0) {
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
            value={passwords[0]}
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
            value={passwords[1]}
            order={9}
            placeholder="•"
            required={true}
          />
        </Styled.PasswordInputWrapper>
        <Styled.Paragraph>•</Styled.Paragraph>
        <Styled.Paragraph>•</Styled.Paragraph>
      </Styled.Wrapper>
    </>
  );
};

export default CardPassword;
