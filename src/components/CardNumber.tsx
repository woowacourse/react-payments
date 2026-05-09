import { CARD_ERROR_MESSAGE } from '../constants/messages.ts';
import type { CardHandler, CardStatus } from '../types/cardStausTypes.ts';
import { useRef } from 'react';

type CardNumbersProps = {
  cardStatus: CardStatus;
  setCardStatus: CardHandler;
};

export default function CardNumber({ cardStatus, setCardStatus }: CardNumbersProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardStatus.handleCardNumbers(index)(e);

    if (e.target.value.length === 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

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
        >
          {cardStatus.cardNumbers.map((cardNumber, index) => {
            return (
              <input
                key={index}
                type="text"
                placeholder="1234"
                maxLength={4}
                onChange={handleChange(index)}
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
                aria-label={`카드 번호 ${index + 1}번째 입력창`}
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
        >
          {cardStatus.cardNumberErrorMode !== 'normal'
            ? CARD_ERROR_MESSAGE[cardStatus.cardNumberErrorMode]
            : ' '}
        </p>
      </div>
    </fieldset>
  );
}
