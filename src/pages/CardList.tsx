import CardListItem from '../components/CardListItem';

export default function CardList() {
  return (
    <div
      css={(theme) => ({
        position: 'relative',
        backgroundColor: theme.colors.white,
        width: '376px',
        height: '100vh',
        margin: '0 auto',
        boxSizing: 'border-box',
        padding: '24px 28px',
        overflowY: 'auto',
      })}
    >
      <h1
        css={(theme) => ({
          ...theme.typography.title,
          margin: '0 0 16px 0',
        })}
      >
        보유 카드 (n)
      </h1>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <CardListItem />
        <CardListItem />
        <CardListItem />
      </div>
    </div>
  );
}
