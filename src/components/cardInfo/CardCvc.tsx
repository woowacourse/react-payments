import { CVC_ERROR_MESSAGE } from '../../constants/messages';
import type { Cvc } from '../../types/cardStausTypes';

type CardCvcProps = {
  cardCvc: Cvc;
  onChangeCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurCardCvc: () => void;
  serverErrorMessage?: string;
};

export default function CardCvc({
  cardCvc,
  onChangeCardCvc,
  onBlurCardCvc,
  serverErrorMessage = '',
}: CardCvcProps) {
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
          onChange={onChangeCardCvc}
          maxLength={3}
          onBlur={onBlurCardCvc}
          inputMode="numeric"
          css={(theme) => ({
            width: '315px',
            height: '32px',
            borderRadius: '2px',
            border: `1.01px solid ${theme.colors.inactiveBorder}`,
            borderColor: `${
              serverErrorMessage || cardCvc.cardCvcErrorMode !== 'normal'
                ? theme.colors.error
                : theme.colors.inactiveBorder
            }`,
            padding: '8px',
          })}
          id="card-cvc"
          autoFocus
          aria-invalid={serverErrorMessage !== '' || cardCvc.cardCvcErrorMode !== 'normal'}
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
          {serverErrorMessage ||
          (cardCvc.cardCvcErrorMode !== 'normal'
            ? CVC_ERROR_MESSAGE[cardCvc.cardCvcErrorMode]
            : ' ')}
        </p>
      </div>
    </fieldset>
  );
}
