type FetchErrorCardProps = {
  onRetry: () => void;
};

export default function FetchErrorCard({ onRetry }: FetchErrorCardProps) {
  return (
    <section
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingTop: '180px',
      }}
    >
      <div
        aria-hidden="true"
        css={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: theme.colors.cardBackground,
          color: theme.colors.white,
          fontFamily: 'Noto Sans KR',
          fontSize: '34px',
          fontWeight: 700,
          lineHeight: '64px',
          boxShadow: '0 0 0 2px #E6E6E6',
          marginBottom: '24px',
        })}
      >
        !
      </div>
      <h2
        css={(theme) => ({
          ...theme.typography.title,
          color: theme.colors.label,
          fontSize: '18px',
          lineHeight: '24px',
          margin: '0 0 10px 0',
          textAlign: 'center',
        })}
      >
        카드 목록을 불러올 수 없어요
      </h2>
      <p
        css={(theme) => ({
          ...theme.typography.caption,
          color: theme.colors.description,
          fontSize: '12px',
          lineHeight: '16px',
          margin: '0 0 14px 0',
          textAlign: 'center',
        })}
      >
        잠시 후 다시 시도해 주세요.
      </p>
      <button
        type="button"
        onClick={onRetry}
        css={(theme) => ({
          width: '320px',
          height: '44px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: theme.colors.cardBackground,
          color: theme.colors.white,
          ...theme.typography.registerCompleteButton,
          cursor: 'pointer',
        })}
      >
        다시 시도
      </button>
    </section>
  );
}
