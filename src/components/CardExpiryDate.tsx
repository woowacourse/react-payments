import {
  DATE_ERROR_MESSAGE,
  MONTH_ERROR_MESSAGE,
  YEAR_ERROR_MESSAGE,
} from '../constants/messages.ts';
import { isMonthError, isYearError } from '../utils/util.ts';
import type { CardExpiry, ExpireHandler } from '../types/cardStausTypes';

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
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1
          css={(theme) => ({
            ...theme.typography.title,
            color: theme.colors.black,
          })}
        >
          카드 유효기간을 입력해 주세요
        </h1>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.description,
          })}
        >
          월/년도(MMYY)를 순서대로 입력해 주세요.
        </p>
      </div>
      <div>
        <label
          css={(theme) => ({
            ...theme.typography.label,
            color: theme.colors.label,
          })}
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
            onChange={setCardExpiry.handleCardExpiryDate(0)}
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
          ></input>
          <input
            type="text"
            placeholder="YY"
            value={cardExpiry.cardExpiryDate[1]}
            onChange={setCardExpiry.handleCardExpiryDate(1)}
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
          ></input>
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
    </div>
  );
}
