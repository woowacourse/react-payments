import { useRef } from 'react';
import { CARD_ERROR_MESSAGE } from '../constants/messages.ts';
import type { CardHandler, CardStatus } from '../types/cardStatusTypes.ts';
import { getCardNumberGroupLengths } from '../utils/card/cardBrand';

type CardNumbersProps = {
  cardNumber: CardStatus;
  setCardNumber: CardHandler;
};

export default function CardNumber({ cardNumber, setCardNumber }: CardNumbersProps) {
  const cardNumberGroupLengths = getCardNumberGroupLengths(cardNumber.cardBrand);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1
          css={(theme) => ({
            ...theme.typography.title,
            color: theme.colors.black,
          })}
        >
          결제할 카드 번호를 입력해주세요
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
          {cardNumber.cardNumbers.map((numberGroup, index) => {
            const maxLength = cardNumberGroupLengths[index];

            return (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                placeholder={'123456'.slice(0, maxLength)}
                maxLength={maxLength}
                onChange={(e) => {
                  setCardNumber.handleCardNumbers(index)(e);
                  if (e.target.value.length >= maxLength) {
                    inputRefs.current[index + 1]?.focus();
                  }
                }}
                value={numberGroup}
                onBlur={setCardNumber.handleCardNumbersBlur}
                inputMode="numeric"
                css={(theme) => ({
                  width: `${maxLength * 17.75}px`,
                  height: '32px',
                  borderRadius: '2px',
                  border: `1.01px solid ${theme.colors.inactiveBorder}`,
                  borderColor:
                    numberGroup.length < maxLength && cardNumber.cardNumberErrorMode !== null
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
          {cardNumber.cardNumberErrorMode !== null
            ? CARD_ERROR_MESSAGE[cardNumber.cardNumberErrorMode]
            : ' '}
        </p>
      </div>
    </div>
  );
}
