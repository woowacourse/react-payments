import { CARD_LENGTH } from '../../constants';
import { useCard } from '../../context/CardContext';
import {
  inputContainer,
  inputSection,
} from '../../styles/@common/inputContainer.style';
import {
  errorInputStyle,
  errorMessageStyle,
} from '../../styles/@common/text.style';
import { Button } from '../@common/Button/Button';
import Input from '../@common/Input/Input';
import Title from '../@common/Title/Title';
import { useCallback, useId } from 'react';
import useEasyNavigate from '../../hooks/useEasyNavigate';

function CardPasswordInput() {
  const id = useId();
  const { goPage } = useEasyNavigate();
  const {
    cardPassword,
    handleCardPasswordChange,
    cardPasswordError: hasError,
    getCardPasswordErrorMessage,
    isCardPasswordValid,
    selectedCardBrand,
    cardNumber,
  } = useCard();

  const handlePaymentComplete = useCallback(() => {
    const cardNumberFirst = cardNumber.first?.toString();
    const cardBrand = selectedCardBrand;

    goPage(`/complete?cardNumber=${cardNumberFirst}&cardBrand=${cardBrand}`);
  }, [goPage, cardNumber, selectedCardBrand]);

  const isCompleteForm = cardPassword?.length === CARD_LENGTH.password;

  return (
    <>
      {' '}
      <Title>
        <Title.Text>카드 비밀번호를 입력해 주세요</Title.Text>
        <Title.SubTitle>앞의 2자리를 입력해주세요</Title.SubTitle>
      </Title>
      <Input.Group id={`card-password-${id}`}>
        <div css={inputContainer}>
          <Input.Label htmlFor={`card-password-${id}`}>비밀번호</Input.Label>
          <article css={inputSection}>
            <Input
              type="password"
              name="password"
              maxLength={CARD_LENGTH.password}
              value={cardPassword?.toString()}
              autoFocus
              onChange={(e) => handleCardPasswordChange(e.target.value)}
              css={hasError ? errorInputStyle : undefined}
              placeholder="앞 2자리"
            />
          </article>
          {hasError && (
            <div css={errorMessageStyle}>{getCardPasswordErrorMessage()}</div>
          )}
        </div>
      </Input.Group>
      {isCompleteForm && (
        <Button
          variant="large"
          onClick={handlePaymentComplete}
          disabled={!isCardPasswordValid || !isCardPasswordValid()}
        >
          확인
        </Button>
      )}
    </>
  );
}

export default CardPasswordInput;
