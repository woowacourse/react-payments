import DeleteMark from '../assets/DeleteMark.png';
import { CARD_COMPANY_LABEL, ISSUER_CODE_CARD_COMPANY } from '../constants/cardCompanies';
import type { CardResponse } from '../api/api';

type CardListItemProps = {
  card: CardResponse;
  onDelete: (id: string) => void;
};

function formatMaskedCardNumber(number: string) {
  return number
    .match(/.{1,4}/g)!
    .map((group) => (group.includes('*') ? '*'.repeat(group.length) : group))
    .join(' ');
}

export default function CardListItem({ card, onDelete }: CardListItemProps) {
  const company = ISSUER_CODE_CARD_COMPANY[card.issuerCode];
  const companyLabel = company ? CARD_COMPANY_LABEL[company] : card.issuerCode;
  const maskedNumbers = formatMaskedCardNumber(card.number);

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
          backgroundColor: company
            ? theme.colors.cardCompanyBackground[company]
            : theme.colors.cardBackground,
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
          유효 기간 {card.expirationDate}
        </p>
      </div>
      <button
        type="button"
        aria-label="카드 삭제"
        onClick={() => onDelete(card.id)}
        css={{ alignSelf: 'center' }}
      >
        <img src={DeleteMark} alt="" aria-hidden="true" css={{ width: '30px', height: '27px' }} />
      </button>
    </article>
  );
}
