import { CARD_ERROR_MESSAGE } from '../../constants/messages';
import type { CardStatus } from '../../types/cardStausTypes';
import { useRef } from 'react';
import { getCardNumberGroups } from '../../utils/cardBrand';
import { isNumericInput } from '../../utils/validate';

type CardNumbersProps = {
  cardStatus: CardStatus;
  onChangeCardNumber: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValidateCardNumber: () => void;
};

export default function CardNumber({
  cardStatus,
  onChangeCardNumber,
  onValidateCardNumber,
}: CardNumbersProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const hasCardNumberError =
    cardStatus.cardNumberErrorMode !== 'normal' && cardStatus.cardNumberErrorMode !== '';
  const cardNumberErrorMessage =
    cardStatus.cardNumberErrorMode !== 'normal' && cardStatus.cardNumberErrorMode !== ''
      ? CARD_ERROR_MESSAGE[cardStatus.cardNumberErrorMode]
      : ' ';

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeCardNumber(index)(e);

    if (e.target.value.length === 4 && isNumericInput(e.target.value)) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }

    onValidateCardNumber();
  };

  const cardNumberGroups = getCardNumberGroups(cardStatus.cardBrand);

  return (
    <fieldset
      css={{ display: 'flex', flexDirection: 'column', border: 'none', padding: 0, gap: '10px' }}
      aria-describedby="card-number-description"
    >
      <legend
        css={(theme) => ({
          ...theme.typography.title,
          color: theme.colors.black,
          padding: 0,
        })}
      >
        결제한 카드 번호를 입력해주세요
      </legend>
      <p
        css={(theme) => ({
          ...theme.typography.caption,
          color: theme.colors.description,
        })}
        id="card-number-description"
      >
        본인 명의의 카드만 결제 가능합니다.
      </p>
      <div css={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label
          css={(theme) => ({
            ...theme.typography.label,
            color: theme.colors.label,
          })}
          id="card-number-label"
        >
          카드 번호
        </label>
        <div
          css={{
            display: 'flex',
            gap: '10px',
          }}
          onBlur={handleBlur}
        >
          {cardStatus.cardNumbers.map((cardNumber, index) => {
            return (
              <input
                key={index}
                type="text"
                placeholder="1234"
                maxLength={cardNumberGroups[index]}
                onChange={handleChange(index)}
                value={cardNumber}
                inputMode="numeric"
                css={(theme) => ({
                  width: '71.25px',
                  height: '32px',
                  borderRadius: '2px',
                  border: `1.01px solid ${theme.colors.inactiveBorder}`,
                  borderColor:
                    cardNumber.length < 4 &&
                    cardStatus.cardNumberErrorMode !== 'normal' &&
                    cardStatus.cardNumberErrorMode !== ''
                      ? theme.colors.error
                      : theme.colors.inactiveBorder,
                  padding: '8px',
                })}
                aria-label={`카드 번호 ${index + 1}번째 입력창`}
                aria-invalid={hasCardNumberError}
                aria-describedby="card-number-error"
                autoFocus={index === 0}
                ref={(element) => {
                  inputRefs.current[index] = element;
                }}
              />
            );
          })}
        </div>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.error,
            height: '12px',
          })}
          id="card-number-error"
        >
          {cardNumberErrorMessage}
        </p>
      </div>
    </fieldset>
  );
}
