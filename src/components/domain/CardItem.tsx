import { css } from '@emotion/react';
import type { CardDto } from '../../apis/cards/type.ts';
import { deleteCard } from '../../apis/cards/api.ts';
import { useState } from 'react';
import type { ResponseStatus } from '../../types.ts';

interface CardItemProps extends Omit<CardDto, 'cvc'> {
  onDelete: (cardId: string) => void;
}

export default function CardItem({ id, cardCompany, cardNumbers, expirationPeriod, onDelete }: CardItemProps) {
  const [responseStatus, setResponseStatus] = useState<ResponseStatus>('idle');
  const isLoading = responseStatus === 'loading';

  const handleDeleteClick = async () => {
    const isConfirmed = window.confirm('정말로 카드를 삭제하시겠어요?');
    if (!isConfirmed) return;

    try {
      setResponseStatus('loading');
      await deleteCard(id);
      onDelete(id);
      setResponseStatus('success');
    } catch {
      alert('카드를 삭제하는 중 문제가 발생했습니다.\n잠시 후 다시 시도해 주세요.');
      setResponseStatus('error');
    }
  };

  return (
    <div css={cardItemStyle}>
      <div css={[cardGraphicStyle, cardColor[cardCompany]]} />
      <div css={cardInfoStyle}>
        <span css={cardCompanyTypography}>{cardCompany}</span>
        <span css={cardNumbersTypography}>{cardNumbers.join(' ')}</span>
        <span css={expirationPeriodTypography}>
          유효기간 {expirationPeriod[0]}/{expirationPeriod[1]}
        </span>
      </div>
      <button css={[deleteButtonStyle, isLoading ? loadingStyle : null]} onClick={handleDeleteClick}>
        x
      </button>
    </div>
  );
}

const cardItemStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const deleteButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0 12px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #8c8c8c;

  :hover,
  :active {
    background-color: #eeeeee;
  }
`;

const loadingStyle = css`
  pointer-events: none;
  cursor: wait;
  background-color: #eeeeee;
`;

const cardInfoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const cardGraphicStyle = css`
  width: 64px;
  height: 40px;
  border-radius: 4px;
`;

// TODO: 카드사를 객체로 관리?
const cardColor = {
  default: css`
    background-color: var(--color-background-card);
  `,
  BC카드: css`
    background-color: var(--color-brand-bc-card);
  `,
  신한카드: css`
    background-color: var(--color-brand-shinhan-card);
  `,
  카카오뱅크: css`
    background-color: var(--color-brand-kakaobank);
  `,
  현대카드: css`
    background-color: var(--color-brand-hyundai-card);
  `,
  우리카드: css`
    background-color: var(--color-brand-woori-card);
  `,
  롯데카드: css`
    background-color: var(--color-brand-lotte-card);
  `,
  하나카드: css`
    background-color: var(--color-brand-hana-card);
  `,
  국민카드: css`
    background-color: var(--color-brand-kb-card);
  `,
};

const cardCompanyTypography = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
`;

const cardNumbersTypography = css`
  font-weight: 400;
  font-size: 11px;
  line-height: 100%;
  color: #8c8c8c;
`;

const expirationPeriodTypography = css`
  font-weight: 400;
  font-size: 9.5px;
  line-height: 100%;
  color: #8c8c8c;
`;
