import Input from '../@common/Input/Input';
import {
  errorInputStyle,
  errorMessageStyle,
} from '../../styles/@common/text.style';

import { cardPeriodInputLayout } from './CardPeriodInput.style';
import { CARD_EXPIRATION } from '../../constants';
import {
  inputContainer,
  inputSection,
} from '../../styles/@common/inputContainer.style';
import Title from '../@common/Title/Title';
import { useCard } from '../../context/CardContext';
import { handleAutoFocus } from '../../utils';

interface CardPeriodInputProps {
  onNext?: () => void;
}

function CardPeriodInput(props: CardPeriodInputProps) {
  const { onNext } = props;
  const {
    cardExpirationDate,
    handleCardExpirationChange,
    cardExpirationDateError: errorState,
    getMonthErrorMessage,
    getYearErrorMessage,
    isCardExpirationValid,
  } = useCard();

  if (isCardExpirationValid()) {
    onNext?.();
  }

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCardExpirationChange.month(e.target.value);
    const fieldMappings = {
      month: 'year',
    };
    handleAutoFocus(e, CARD_EXPIRATION.monthLength, fieldMappings);
  };

  return (
    <div css={cardPeriodInputLayout}>
      <Title>
        <Title.Text>카드 유효기간을 입력해 주세요</Title.Text>
        <Title.SubTitle>월/년도(MMYY)를 순서대로 입력해 주세요.</Title.SubTitle>
      </Title>

      <Input.Group id="card-expiration">
        <div css={inputContainer}>
          <Input.Label>유효기간</Input.Label>
          <article css={inputSection}>
            <Input.Group id="card-expiration">
              <Input
                type="text"
                name="month"
                maxLength={CARD_EXPIRATION.monthLength}
                value={cardExpirationDate.month}
                onChange={handleMonthChange}
                css={errorState.month ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-expiration-year">
              <Input
                type="text"
                name="year"
                maxLength={CARD_EXPIRATION.yearLength}
                value={cardExpirationDate.year}
                onChange={(e) =>
                  handleCardExpirationChange.year(e.target.value)
                }
                css={errorState.year ? errorInputStyle : undefined}
              />
            </Input.Group>
          </article>
          {errorState.month && (
            <div css={errorMessageStyle}>{getMonthErrorMessage()}</div>
          )}
          {errorState.year && !errorState.month && (
            <div css={errorMessageStyle}>{getYearErrorMessage()}</div>
          )}
        </div>
      </Input.Group>
    </div>
  );
}

export default CardPeriodInput;
