import { css } from '@emotion/react';
import type { CardInfo } from '../../../types';
import visaLogo from '/visa.png';
import mastercardLogo from '/mastercard.png';
import amexLogo from '/amex.png';
import dinersLogo from '/diners.png';
import unionpayLogo from '/unionpay.png';

const CARD_BRAND_LOGOS: Partial<Record<string, { src: string; alt: string }>> = {
  visa: { src: visaLogo, alt: 'visa' },
  mastercard: { src: mastercardLogo, alt: 'mastercard' },
  amex: { src: amexLogo, alt: 'amex' },
  diners: { src: dinersLogo, alt: 'diners' },
  unionpay: { src: unionpayLogo, alt: 'unionpay' },
};

const CARD_COMPANY_COLORS: Partial<Record<string, string>> = {
  bc: 'var(--color-brand-bc-card)',
  shinhan: 'var(--color-brand-shinhan-card)',
  kakao: 'var(--color-brand-kakaobank)',
  hyundai: 'var(--color-brand-hyundai-card)',
  woori: 'var(--color-brand-woori-card)',
  lotte: 'var(--color-brand-lotte-card)',
  hana: 'var(--color-brand-hana-card)',
  nh: 'var(--color-brand-kb-card)',
};

interface CardProps {
  cardNumber: CardInfo['cardNumbers'];
  expirationPeriod: CardInfo['expirationPeriod'];
  cardBrand: CardInfo['cardBrand'];
  cardCompany: CardInfo['cardCompany'];
}

export default function Card({ cardNumber, expirationPeriod, cardBrand, cardCompany }: CardProps) {
  const backgroundColor = CARD_COMPANY_COLORS[cardCompany] ?? 'var(--color-background-card)';

  return (
    <div css={[cardStyle, { background: backgroundColor }]}>
      <div css={cardHeaderStyle}>
        <div css={cardChipStyle} />
        {CARD_BRAND_LOGOS[cardBrand] && (
          <img css={cardBrandStyle} src={CARD_BRAND_LOGOS[cardBrand].src} alt={CARD_BRAND_LOGOS[cardBrand].alt} />
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

const cardBrandStyle = css`
  width: 36px;
  height: 22px;
  border-radius: 3px;
  border: 1px solid var(--color-border-default);
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
