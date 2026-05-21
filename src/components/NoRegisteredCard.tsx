type NoRegisteredCardProps = {
  onAddCard: () => void;
};

export default function NoRegisteredCard({ onAddCard }: NoRegisteredCardProps) {
  return (
    <section
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingTop: '270px',
      }}
    >
      <div
        aria-hidden="true"
        css={{
          width: '160px',
          height: '92px',
          border: '2px dashed #D9D9D9',
          borderRadius: '8px',
          backgroundColor: '#FAFAFA',
          boxSizing: 'border-box',
          marginBottom: '34px',
        }}
      />
      <h2
        css={(theme) => ({
          ...theme.typography.registerCompleteMessage,
          color: theme.colors.label,
          margin: '0 0 16px 0',
          textAlign: 'center',
        })}
      >
        등록된 카드가 없습니다
      </h2>
      <p
        css={(theme) => ({
          ...theme.typography.info,
          color: theme.colors.description,
          margin: '0 0 34px 0',
          textAlign: 'center',
          letterSpacing: '0',
        })}
      >
        아래 버튼을 눌러 첫 카드를 등록해보세요
      </p>
      <button
        type="button"
        onClick={onAddCard}
        css={(theme) => ({
          width: '320px',
          height: '48px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: theme.colors.cardBackground,
          color: theme.colors.white,
          ...theme.typography.registerCompleteButton,
          cursor: 'pointer',
        })}
      >
        카드 추가하기
      </button>
    </section>
  );
}
