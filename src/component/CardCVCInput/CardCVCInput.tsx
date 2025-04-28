import Input from '../@common/Input/Input';
import {
  errorInputStyle,
  errorMessageStyle,
} from '../../styles/@common/text.style';
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
  const { cardCVC } = useCard();

  if (cardCVC.isValid()) {
    onNext?.();
  }

  return (
    <>
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
              autoFocus
              value={cardCVC.value?.toString()}
              onChange={(e) => cardCVC.onChange(e.target.value)}
              css={cardCVC.error ? errorInputStyle : undefined}
            />
          </article>
          {cardCVC.error && (
            <div css={errorMessageStyle}>{cardCVC.getErrorMessage()}</div>
          )}
        </div>
      </Input.Group>
    </>
  );
}

export default CardCVCInput;
