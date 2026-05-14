import { PASSWORD_ERROR_MESSAGE } from '../constants/messages.ts';
import type { Password } from '../types/cardStausTypes';

type CardPasswordProps = {
  cardPassword: Password;
  onChangeCardPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurCardPassword: () => void;
};

export default function CardPassword({
  cardPassword,
  onChangeCardPassword,
  onBlurCardPassword,
}: CardPasswordProps) {
  return (
    <fieldset
      css={{ display: 'flex', flexDirection: 'column', border: 'none', padding: 0, gap: '10px' }}
      aria-describedby="card-password-description"
    >
      <legend
        css={(theme) => ({
          ...theme.typography.title,
          color: theme.colors.black,
          padding: 0,
        })}
      >
        비밀번호를 입력해 주세요
      </legend>
      <p
        css={(theme) => ({
          ...theme.typography.caption,
          color: theme.colors.description,
        })}
        id="card-password-description"
      >
        앞의 2자리를 입력해주세요
      </p>

      <div css={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label
          css={(theme) => ({
            ...theme.typography.label,
            color: theme.colors.label,
          })}
          htmlFor="card-password-label"
        >
          비밀번호 앞 2자리
        </label>
        <div
          css={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <input
            type="password"
            value={cardPassword.cardPassword}
            onChange={onChangeCardPassword}
            onBlur={onBlurCardPassword}
            maxLength={2}
            inputMode="numeric"
            css={(theme) => ({
              width: '100%',
              height: '32px',
              borderRadius: '2px',
              border: `1.01px solid ${theme.colors.inactiveBorder}`,
              borderColor: `${
                cardPassword.cardPasswordErrorMode !== 'normal'
                  ? theme.colors.error
                  : theme.colors.inactiveBorder
              }`,
              padding: '8px',
            })}
            id="card-password-label"
            autoFocus
            aria-invalid={cardPassword.cardPasswordErrorMode !== 'normal'}
            aria-describedby="card-password-error"
          />
        </div>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.error,
            height: '12px',
          })}
          id="card-password-error"
        >
          {cardPassword.cardPasswordErrorMode !== 'normal'
            ? PASSWORD_ERROR_MESSAGE[cardPassword.cardPasswordErrorMode]
            : ' '}
        </p>
      </div>
    </fieldset>
  );
}
