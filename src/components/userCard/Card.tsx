import Delete from '../../assets/Delete.png';
import type { CardResponse } from '../../types/cardStausTypes';
import { CARD_ISSUER, CARD_ISSUER_CODE } from '../../constants/constant';
import { deleteCard } from '../../api/deleteCard';

type CardProps = {
  card: CardResponse;
};

export default function Card({ card }: CardProps) {
  type CardIssuerServerCode = '31' | '41' | '15' | '61' | 'W1' | '71' | '21' | '11';

  const handleDelete = async (id: string) => {
    if (confirm('카드를 삭제하시겠습니까?')) {
      try {
        await deleteCard(id);
        location.reload();
      } catch (error) {
        alert(error instanceof Error ? error.message : '카드 삭제에 실패했습니다.');
      }
    }
  };

  const cardIssuerKey = card.issuerCode as CardIssuerServerCode;
  const cardColorKey = CARD_ISSUER_CODE[cardIssuerKey];

  return (
    <div
      css={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '12px',
        padding: '14px 12px',
        width: '100%',
        height: '69px',
        border: `1px solid ${theme.colors.cardSectionBorder}`,
        borderRadius: '5px',
      })}
    >
      <div
        css={(theme) => ({
          width: '64px',
          height: '40px',
          borderRadius: '4px',
          backgroundColor: theme.colors[cardColorKey],
        })}
      />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          height: '45px',
          width: '180px',
        }}
      >
        <p
          css={(theme) => ({
            ...theme.typography.mode,
            color: theme.colors.completeText,
            margin: 0,
          })}
        >
          {CARD_ISSUER[cardIssuerKey]}
        </p>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.cardInfo,
            fontSize: '11px',
            margin: 0,
          })}
        >
          {card.number}
        </p>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.cardInfo,
            margin: 0,
          })}
        >
          유효 기간 {card.expirationDate}
        </p>
      </div>
      <img
        src={Delete}
        alt="카드 삭제 아이콘"
        width={30}
        height={30}
        css={{ cursor: 'pointer' }}
        onClick={() => handleDelete(card.id)}
      />
    </div>
  );
}
