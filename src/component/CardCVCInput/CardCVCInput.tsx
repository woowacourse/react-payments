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
import { Button } from '../@common/Button/Button';

interface CardCVCInputProps {
  onNext?: () => void;
  onClickBackButton: () => void;
}

function CardCVCInput(props: CardCVCInputProps) {
  const { onNext, onClickBackButton } = props;
  const { cardCVC } = useCard();

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
      <Button variant="small" onClick={onClickBackButton}>
        뒤로가기
      </Button>
      <Button variant="small" onClick={onNext} colorVariant="gray">
        다음
      </Button>
    </>
  );
}

export default CardCVCInput;
