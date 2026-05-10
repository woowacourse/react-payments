import { css } from '@emotion/react';
import type { CardBrand, CardInfo } from '../../types';

interface CardProps {
  cardNumber: CardInfo['cardNumbers'];
  expirationPeriod: CardInfo['expirationPeriod'];
  cardBrand: CardBrand;
}

export default function Card({ cardNumber, expirationPeriod, cardBrand }: CardProps) {
  const cardBrandImg = {
    visa: './visa.png',
    mastercard: './mastercard.png',
    diners: './diners.png',
    amex: './amex.png',
    unionpay: './unionpay.png',
  };

  return (
    <div css={cardStyle}>
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
  background: var(--color-background-card);
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px var(--color-shadow-card);
  padding: 8px 12px;
`;

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
  color: var(--color-text-card);
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
