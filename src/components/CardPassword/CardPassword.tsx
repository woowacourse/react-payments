import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useContext, useState } from 'react';
import * as Styled from './CardPassword.styles';
import { RefContext } from '../../contexts/RefProvider';
import { REF_INDEX } from '../../constants/refIndex';

interface CardPasswordProps {
  passwords: Array<string>;
  isSetPasswords: (order: number, value: string) => boolean;
}

const CardPassword = ({ passwords, isSetPasswords }: CardPasswordProps) => {
  const cardRefs = useContext(RefContext);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentOrder = Number(e.target.dataset['order']);

    if (
      !isSetPasswords(
        currentOrder - REF_INDEX.lastSecurityCodeOrder,
        e.target.value
      )
    ) {
      setErrorMessage('카드 비밀번호 앞 두 자리를 숫자로 입력해주세요.');
      return;
    }

    setErrorMessage('');
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
      <Styled.ErrorTextWrapper>{errorMessage}</Styled.ErrorTextWrapper>
    </>
  );
};

export default CardPassword;
