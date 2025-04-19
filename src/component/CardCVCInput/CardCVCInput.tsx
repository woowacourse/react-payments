import Input from '../@common/Input/Input';
import {
  errorInputStyle,
  errorMessageStyle,
} from '../../styles/@common/text/text.style';
import { cardPeriodInputLayout } from '../CardPeriod/CardPeriodInput.style';
import { CARD_CVC_ERROR, CARD_CVC } from '../../constants';
import {
  inputContainer,
  inputSection,
} from '../../styles/@common/inputContainer.style';
import { CardCVC } from '../../../types/types';
import Title from '../@common/Title/Title';

type CardCVCInputProps = {
  cardCVC: CardCVC;
  onChange: (value: string) => void;
  hasError: boolean;
  getCardCVCErrorMessage?: () => string | null;
};

function CardCVCInput({
  cardCVC,
  onChange,
  hasError,
  getCardCVCErrorMessage,
}: CardCVCInputProps) {
  const getErrorMessage = (): string => {
    if (getCardCVCErrorMessage) {
      return getCardCVCErrorMessage() || CARD_CVC_ERROR.onlyNumbers;
    }
    return CARD_CVC_ERROR.onlyNumbers;
  };

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
              maxLength={CARD_CVC.maxLength}
              value={cardCVC?.toString()}
              onChange={(e) => onChange(e.target.value)}
              css={hasError ? errorInputStyle : undefined}
            />
          </article>
          {hasError && <div css={errorMessageStyle}>{getErrorMessage()}</div>}
        </div>
      </Input.Group>
    </div>
  );
}

export default CardCVCInput;
