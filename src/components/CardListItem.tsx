import DeleteMark from '../assets/DeleteMark.png';

export default function CardListItem() {
  return (
    <article
      css={(theme) => ({
        display: 'flex',
        gap: '12px',
        padding: '12px',
        border: `1px solid #E6E6E6`,
        borderRadius: '5px',
        width: '320px',
        height: '73px',
      })}
    >
      <div
        css={(theme) => ({
          backgroundColor: theme.colors.black,
          width: '64px',
          height: '40px',
          borderRadius: '4px',
        })}
      ></div>
      <div
        css={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          width: '178px',
          height: '49px',
        })}
      >
        <p
          css={(theme) => ({
            ...theme.typography.title,
            margin: 0,
          })}
        >
          BC 카드
        </p>
        <p
          css={(theme) => ({
            ...theme.typography.cardListInfo,
            color: theme.colors.cardListInfo,
            margin: 0,
          })}
        >
          1234 **** **** 5678
        </p>
        <p
          css={(theme) => ({
            ...theme.typography.cardListInfo,
            color: theme.colors.cardListInfo,
            margin: 0,
          })}
        >
          유효 기간 12/24
        </p>
      </div>
      <button type="button" aria-label="카드 삭제">
        <img src={DeleteMark} alt="" aria-hidden="true" css={{ width: '30px', height: '27px' }} />
      </button>
    </article>
  );
}
