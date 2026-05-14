import { CVC_ERROR_MESSAGE } from '../constants/messages.ts';
import type { Cvc, CvcHandler } from '../types/cardStausTypes.ts';

type CardCvcProps = {
  cardCvc: Cvc;
  setCardCvc: CvcHandler;
};

export default function CardCvc({ cardCvc, setCardCvc }: CardCvcProps) {
  return (
    <fieldset css={{ display: 'flex', flexDirection: 'column', border: 'none', padding: 0 }}>
      <legend
        css={(theme) => ({
          ...theme.typography.title,
          color: theme.colors.black,
          padding: 0,
          marginBottom: '18px',
        })}
      >
        CVC 번호를 입력해 주세요
      </legend>
      <div css={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label
          css={(theme) => ({
            ...theme.typography.label,
            color: theme.colors.label,
          })}
          htmlFor="card-cvc"
        >
          CVC
        </label>
        <input
          type="text"
          placeholder="123"
          value={cardCvc.cardCvc}
          onChange={setCardCvc.handleCardCvc}
          maxLength={3}
          onBlur={setCardCvc.handleCvcBlur}
          inputMode="numeric"
          css={(theme) => ({
            width: '315px',
            height: '32px',
            borderRadius: '2px',
            border: `1.01px solid ${theme.colors.inactiveBorder}`,
            borderColor: `${
              cardCvc.cardCvcErrorMode !== 'normal'
                ? theme.colors.error
                : theme.colors.inactiveBorder
            }`,
            padding: '8px',
          })}
          id="card-cvc"
          autoFocus
          aria-invalid={cardCvc.cardCvcErrorMode !== 'normal'}
          aria-describedby="card-cvc-error"
        />
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.error,
            height: '12px',
          })}
          id="card-cvc-error"
        >
          {cardCvc.cardCvcErrorMode !== 'normal'
            ? CVC_ERROR_MESSAGE[cardCvc.cardCvcErrorMode]
            : ' '}
        </p>
      </div>
    </fieldset>
  );
}
