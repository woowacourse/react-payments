import { css } from '@emotion/react';
import type { Card } from '../../../hooks/useCardListData';
import { CARD_COMPANY_OPTIONS } from '../../../constants';
import Button from '../Button';

type CardCompany = (typeof CARD_COMPANY_OPTIONS)[number]['value'];

const COMPANY_COLORS: Record<CardCompany, string> = {
  '': '#acacac',
  bc: 'var(--color-brand-bc-card)',
  shinhan: 'var(--color-brand-shinhan-card)',
  kakao: 'var(--color-brand-kakaobank)',
  hyundai: 'var(--color-brand-hyundai-card)',
  woori: 'var(--color-brand-woori-card)',
  lotte: 'var(--color-brand-lotte-card)',
  hana: 'var(--color-brand-hana-card)',
  kookmin: 'var(--color-brand-kb-card)',
};

const COMPANY_LABELS: Record<CardCompany, string> = {
  '': '',
  bc: 'BC카드',
  shinhan: '신한카드',
  kakao: '카카오뱅크',
  hyundai: '현대카드',
  woori: '우리카드',
  lotte: '롯데카드',
  hana: '하나카드',
  kookmin: '국민카드',
};

interface CardItemProps extends Omit<Card, 'id'> {
  id: string;
  onDeleteCard: (id: string) => void;
}

export default function CardItem({ id, company, number, expirationDate, onDeleteCard }: CardItemProps) {
  return (
    <li css={itemStyle}>
      <div css={thumbnailStyle(COMPANY_COLORS[company])} />
      <div css={infoStyle}>
        <span css={companyStyle}>{COMPANY_LABELS[company]}</span>
        <span css={numberStyle}>{number.join(' ')}</span>
        <span css={dateStyle}>유효기간 {expirationDate.join('/')}</span>
      </div>
      <Button variant="ghost" onClick={() => onDeleteCard(id)}>
        ✕
      </Button>
    </li>
  );
}

const itemStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const thumbnailStyle = (color: string) => css`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background: ${color};
  flex-shrink: 0;
`;

const infoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const companyStyle = css`
  font-size: 14px;
  font-weight: bold;
  color: #353c49;
`;

const numberStyle = css`
  font-size: 11px;
  color: #8c8c8c;
`;

const dateStyle = css`
  font-size: 9.5px;
  color: #8c8c8c;
`;
