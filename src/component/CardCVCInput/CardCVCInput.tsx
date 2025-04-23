import Input from '../@common/Input/Input';
import {
  errorInputStyle,
  errorMessageStyle,
} from '../../styles/@common/text.style';
import { cardPeriodInputLayout } from '../CardPeriod/CardPeriodInput.style';
import { CARD_LENGTH } from '../../constants';
import {
  inputContainer,
  inputSection,
} from '../../styles/@common/inputContainer.style';
import Title from '../@common/Title/Title';
import { useCard } from '../../context/CardContext';

interface CardCVCInputProps {
  onNext?: () => void;
}

function CardCVCInput(props: CardCVCInputProps) {
  const { onNext } = props;
  const {
    cardCVC,
    handleCardCVCChange,
    cardCVCError: hasError,
    getCardCVCErrorMessage,
    isCardCVCValid,
  } = useCard();

  if (isCardCVCValid()) {
    onNext?.();
  }

  return (
    <div css={cardPeriodInputLayout}>
      <Title>
        <Title.Text>CVC 번호를 입력해 주세요</Title.Text>
      </Title>
      <Input.Group id="card-cvc">
        <div css={inputContainer}>
          <Input.Label>CVC</Input.Label>
          <article css={inputSection}>
            <Input
              type="text"
              name="cvc"
              maxLength={CARD_LENGTH.cvc}
              value={cardCVC?.toString()}
              onChange={(e) => handleCardCVCChange(e.target.value)}
              css={hasError ? errorInputStyle : undefined}
            />
          </article>
          {hasError && (
            <div css={errorMessageStyle}>{getCardCVCErrorMessage()}</div>
          )}
        </div>
      </Input.Group>
    </div>
  );
}

export default CardCVCInput;
