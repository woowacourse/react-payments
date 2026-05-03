import { CARD_ERROR_MESSAGE } from '../constants/messages.ts';
import type { CardHandler, CardStatus } from '../types/cardStausTypes.ts';

type CardNumbersProps = {
  cardStatus: CardStatus;
  setCardStatus: CardHandler;
};

export default function CardNumber({ cardStatus, setCardStatus }: CardNumbersProps) {
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1
          css={(theme) => ({
            ...theme.typography.title,
            color: theme.colors.black,
          })}
        >
          결제한 카드 번호를 입력해주세요
        </h1>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.description,
          })}
        >
          본인 명의의 카드만 결제 가능합니다.
        </p>
      </div>
      <div>
        <label
          css={(theme) => ({
            ...theme.typography.label,
            color: theme.colors.label,
          })}
        >
          카드 번호
        </label>
        <div
          css={{
            display: 'flex',
            gap: '10px',
          }}
        >
          {cardStatus.cardNumbers.map((cardNumber, index) => {
            return (
              <input
                key={index}
                type="text"
                placeholder="1234"
                maxLength={4}
                onChange={setCardStatus.handleCardNumbers(index)}
                value={cardNumber}
                onBlur={setCardStatus.handleCardNumbersBlur}
                inputMode="numeric"
                css={(theme) => ({
                  width: '71.25px',
                  height: '32px',
                  borderRadius: '2px',
                  border: `1.01px solid ${theme.colors.inactiveBorder}`,
                  borderColor:
                    cardNumber.length < 4 && cardStatus.cardNumberErrorMode !== 'normal'
                      ? theme.colors.error
                      : theme.colors.inactiveBorder,
                  padding: '8px',
                })}
              ></input>
            );
          })}
        </div>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.error,
            height: '12px',
          })}
        >
          {cardStatus.cardNumberErrorMode !== 'normal'
            ? CARD_ERROR_MESSAGE[cardStatus.cardNumberErrorMode]
            : ' '}
        </p>
      </div>
    </div>
  );
}
