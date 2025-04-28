import Input from '../@common/Input/Input';
import {
  errorInputStyle,
  errorMessageStyle,
} from '../../styles/@common/text.style';

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
  const { cardExpiration } = useCard();

  if (cardExpiration.isValid()) {
    onNext?.();
  }

  // 월(month) 입력 핸들러
  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cardExpiration.onChange.month(e.target.value);
    const fieldMappings = {
      month: 'year',
    };
    handleAutoFocus(e, CARD_EXPIRATION.monthLength, fieldMappings);
  };

  return (
    <>
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
                autoFocus
                value={cardExpiration.value.month}
                onChange={handleMonthChange}
                css={cardExpiration.error.month ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-expiration-year">
              <Input
                type="text"
                name="year"
                maxLength={CARD_EXPIRATION.yearLength}
                value={cardExpiration.value.year}
                onChange={(e) => cardExpiration.onChange.year(e.target.value)}
                css={cardExpiration.error.year ? errorInputStyle : undefined}
              />
            </Input.Group>
          </article>
          {cardExpiration.error.month && (
            <div css={errorMessageStyle}>
              {cardExpiration.getMonthErrorMessage()}
            </div>
          )}
          {cardExpiration.error.year && !cardExpiration.error.month && (
            <div css={errorMessageStyle}>
              {cardExpiration.getYearErrorMessage()}
            </div>
          )}
        </div>
      </Input.Group>
    </>
  );
}

export default CardPeriodInput;
