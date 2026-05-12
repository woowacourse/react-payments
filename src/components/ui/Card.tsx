import { css } from '@emotion/react';
import type { CardBrand, CardCompany, CardInfo } from '../../types';

interface CardProps {
  cardNumber: CardInfo['cardNumbers'];
  expirationPeriod: CardInfo['expirationPeriod'];
  cardBrand: CardBrand;
  cardCompany: CardCompany;
}

export default function Card({ cardNumber, expirationPeriod, cardBrand, cardCompany }: CardProps) {
  const cardBrandImg = {
    visa: './visa.png',
    mastercard: './mastercard.png',
    diners: './diners.png',
    amex: './amex.png',
    unionpay: './unionpay.png',
  };

  return (
    <div css={[cardStyle, cardColor[cardCompany ?? 'default']]}>
      <div css={cardHeaderStyle}>
        <div css={cardChipStyle} />
        {cardBrand !== 'local' && (
          <div css={cardBrandWrapperStyle}>
            <img css={cardBrandImgStyle} src={cardBrandImg[cardBrand]} alt={cardBrand} />
          </div>
        )}
      </div>

      <div css={cardInfoWrapperStyle}>
        <div css={cardNumberWrapperStyle}>
          {cardNumber.map((num, index) => (
            <span key={index}>{index < 2 ? num : <span css={hiddenNumberStyle}>{'∙'.repeat(num.length)}</span>}</span>
          ))}
        </div>
        <div>
          <span>{expirationPeriod[0]}</span>
          {expirationPeriod[1] && <span>/</span>}
          <span>{expirationPeriod[1]}</span>
        </div>
      </div>
    </div>
  );
}

const cardStyle = css`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px var(--color-shadow-card);
  padding: 8px 12px;
`;

const cardColor = {
  default: css`
    color: var(--color-text-card);
    background-color: var(--color-background-card);
  `,
  BC카드: css`
    color: var(--color-text-card);
    background-color: var(--color-brand-bc-card);
  `,
  신한카드: css`
    color: var(--color-text-card);
    background-color: var(--color-brand-shinhan-card);
  `,
  카카오뱅크: css`
    color: var(--color-text-default);
    background-color: var(--color-brand-kakaobank);
  `,
  현대카드: css`
    color: var(--color-text-card);
    background-color: var(--color-brand-hyundai-card);
  `,
  우리카드: css`
    color: var(--color-text-card);
    background-color: var(--color-brand-woori-card);
  `,
  롯데카드: css`
    color: var(--color-text-card);
    background-color: var(--color-brand-lotte-card);
  `,
  하나카드: css`
    color: var(--color-text-card);
    background-color: var(--color-brand-hana-card);
  `,
  국민카드: css`
    color: var(--color-text-card);
    background-color: var(--color-brand-kb-card);
  `,
};

const cardHeaderStyle = css`
  display: flex;
  justify-content: space-between;
`;

const cardChipStyle = css`
  width: 36px;
  height: 22px;
  background: var(--color-background-chip);
  border-radius: 3px;
`;

const cardBrandWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 22px;
  padding: 4px 3px;
  border-radius: 3px;
  border: 1px solid var(--color-border-default);
  background-color: white;
`;

const cardBrandImgStyle = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const cardInfoWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 16%;
`;

const cardNumberWrapperStyle = css`
  display: flex;
  gap: 10px;
`;

const hiddenNumberStyle = css`
  letter-spacing: 0;
`;
