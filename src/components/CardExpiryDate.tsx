import {
  DATE_ERROR_MESSAGE,
  MONTH_ERROR_MESSAGE,
  YEAR_ERROR_MESSAGE,
} from '../constants/messages.ts';
import { isMonthError, isYearError, isNumericInput } from '../utils/util.ts';
import type { CardExpiry, ExpireHandler } from '../types/cardStausTypes';
import { useRef } from 'react';

type CardExpiryDateProps = {
  cardExpiry: CardExpiry;
  setCardExpiry: ExpireHandler;
};

export default function CardExpiryDate({ cardExpiry, setCardExpiry }: CardExpiryDateProps) {
  const EXPIRY_ERROR_MESSAGE = {
    ...DATE_ERROR_MESSAGE,
    ...MONTH_ERROR_MESSAGE,
    ...YEAR_ERROR_MESSAGE,
  };

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardExpiry.handleCardExpiryDate(index)(e);

    if (e.target.value.length === 2 && isNumericInput(e.target.value)) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <fieldset
      css={{ display: 'flex', flexDirection: 'column', border: 'none', padding: 0, gap: '10px' }}
      aria-describedby="card-expiry-description"
    >
      <legend
        css={(theme) => ({
          ...theme.typography.title,
          color: theme.colors.black,
          padding: 0,
        })}
      >
        카드 유효기간을 입력해 주세요
      </legend>
      <p
        css={(theme) => ({
          ...theme.typography.caption,
          color: theme.colors.description,
        })}
        id="card-expiry-description"
      >
        월/년도(MMYY)를 순서대로 입력해 주세요.
      </p>

      <div css={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label
          css={(theme) => ({
            ...theme.typography.label,
            color: theme.colors.label,
          })}
          id="card-expiry-label"
        >
          유효기간
        </label>
        <div
          css={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <input
            type="text"
            placeholder="MM"
            value={cardExpiry.cardExpiryDate[0]}
            onChange={handleChange(0)}
            onBlur={setCardExpiry.handleMonthBlur}
            maxLength={2}
            inputMode="numeric"
            css={(theme) => ({
              width: '152.5px',
              height: '32px',
              borderRadius: '2px',
              border: `1.01px solid ${theme.colors.inactiveBorder}`,
              borderColor: `${
                isMonthError(cardExpiry.cardExpiryDateErrorMode)
                  ? theme.colors.error
                  : theme.colors.inactiveBorder
              }`,
              padding: '8px',
            })}
            aria-label="카드 유효기간 월 입력창"
            autoFocus
            ref={(element) => {
              inputRefs.current[0] = element;
            }}
          />
          <input
            type="text"
            placeholder="YY"
            value={cardExpiry.cardExpiryDate[1]}
            onChange={handleChange(1)}
            onBlur={setCardExpiry.handleYearBlur}
            maxLength={2}
            inputMode="numeric"
            css={(theme) => ({
              width: '152.5px',
              height: '32px',
              borderRadius: '2px',
              border: `1.01px solid ${theme.colors.inactiveBorder}`,
              borderColor: `${
                isYearError(cardExpiry.cardExpiryDateErrorMode)
                  ? theme.colors.error
                  : theme.colors.inactiveBorder
              }`,
              padding: '8px',
            })}
            aria-label="카드 유효기간 연도 입력창"
            ref={(element) => {
              inputRefs.current[1] = element;
            }}
          />
        </div>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.error,
            height: '12px',
          })}
        >
          {cardExpiry.cardExpiryDateErrorMode !== 'normal'
            ? EXPIRY_ERROR_MESSAGE[cardExpiry.cardExpiryDateErrorMode]
            : ' '}
        </p>
      </div>
    </fieldset>
  );
}
