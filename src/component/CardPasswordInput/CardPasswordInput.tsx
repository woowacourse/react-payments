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
import { cardPasswordInputLayout } from './CardPasswordInput.style';

interface CardPasswordInputProps {
  onNext?: () => void;
}

function CardPasswordInput(props: CardPasswordInputProps) {
  const { onNext } = props;
  const {
    cardPassword,
    handleCardPasswordChange,
    cardPasswordError: hasError,
    getCardPasswordErrorMessage,
    isCardPasswordValid,
  } = useCard();

  if (isCardPasswordValid && isCardPasswordValid()) {
    onNext?.();
  }

  return (
    <div css={cardPasswordInputLayout}>
      <Title>
        <Title.Text>카드 비밀번호를 입력해 주세요</Title.Text>
        <Title.SubTitle>앞의 2자리를 입력해주세요</Title.SubTitle>
      </Title>
      <Input.Group id="card-password">
        <div css={inputContainer}>
          <Input.Label>비밀번호</Input.Label>
          <article css={inputSection}>
            <Input
              type="password"
              name="password"
              maxLength={CARD_LENGTH.password}
              value={cardPassword?.toString()}
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
      {cardPassword?.length === CARD_LENGTH.password && (
        <Button variant="large">결제하기</Button>
      )}
    </div>
  );
}

export default CardPasswordInput;
