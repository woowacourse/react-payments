import DeleteMark from '../assets/DeleteMark.png';
import { CARD_COMPANY_LABEL } from '../constants/cardCompanies';
import type { CardResponse } from '../types/api';

type CardListItemProps = {
  card: CardResponse;
};

export default function CardListItem({ card }: CardListItemProps) {
  const maskedNumbers = card.cardNumbers
    .map((group, i) => (i < 2 ? group : '*'.repeat(group.length)))
    .join(' ');
  const companyLabel = CARD_COMPANY_LABEL[card.cardCompany as keyof typeof CARD_COMPANY_LABEL] ?? card.cardCompany;
  const expiry = `${card.expiryDate[0]}/${card.expiryDate[1]}`;

  return (
    <article
      css={{
        display: 'flex',
        gap: '12px',
        padding: '12px',
        border: '1px solid #E6E6E6',
        borderRadius: '5px',
        width: '320px',
        height: '73px',
      }}
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
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          width: '178px',
          height: '49px',
        }}
      >
        <p css={(theme) => ({ ...theme.typography.title, margin: 0 })}>{companyLabel}</p>
        <p
          css={(theme) => ({
            ...theme.typography.cardListInfo,
            color: theme.colors.cardListInfo,
            margin: 0,
          })}
        >
          {maskedNumbers}
        </p>
        <p
          css={(theme) => ({
            ...theme.typography.cardListInfo,
            color: theme.colors.cardListInfo,
            margin: 0,
          })}
        >
          유효 기간 {expiry}
        </p>
      </div>
      <button type="button" aria-label="카드 삭제" css={{ alignSelf: 'center' }}>
        <img src={DeleteMark} alt="" aria-hidden="true" css={{ width: '30px', height: '27px' }} />
      </button>
    </article>
  );
}
