import { PASSWORD_ERROR_MESSAGE } from '../constants/messages';
import type { CardPassword, CardPasswordHandler } from '../types/cardStausTypes';

type CardPasswordProps = {
  cardPassword: CardPassword;
  setCardPassword: CardPasswordHandler;
};

export default function CardPassword({ cardPassword, setCardPassword }: CardPasswordProps) {
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1
          css={(theme) => ({
            ...theme.typography.title,
            color: theme.colors.black,
          })}
        >
          비밀번호를 입력해 주세요
        </h1>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.description,
          })}
        >
          앞의 2자리를 입력해주세요
        </p>
      </div>
      <div>
        <label
          css={(theme) => ({
            ...theme.typography.label,
            color: theme.colors.label,
          })}
        >
          비밀번호 앞 2자리
        </label>
        <div>
          <input
            type="password"
            placeholder="••"
            value={cardPassword.cardPassword}
            onChange={setCardPassword.handleCardPassword}
            maxLength={2}
            onBlur={setCardPassword.handlePasswordBlur}
            inputMode="numeric"
            css={(theme) => ({
              width: '315px',
              height: '32px',
              borderRadius: '2px',
              border: `1.01px solid ${theme.colors.inactiveBorder}`,
              borderColor:
                cardPassword.cardPasswordErrorMode !== null
                  ? theme.colors.error
                  : theme.colors.inactiveBorder,
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
          {cardPassword.cardPasswordErrorMode !== null
            ? PASSWORD_ERROR_MESSAGE[cardPassword.cardPasswordErrorMode]
            : ' '}
        </p>
      </div>
    </div>
  );
}
