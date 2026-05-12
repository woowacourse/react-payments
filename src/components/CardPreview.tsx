import { CARD_BRAND_IMAGE } from '../constants/cardBrandImages';
import type { CardBrand, CardCompany } from '../types/cardStausTypes';

type CardPreviewProps = {
  cardBrand?: CardBrand;
  cardCompany: CardCompany;
  cardNumbers: string[];
  cardExpiryDate: string[];
};

export default function CardPreview({
  cardBrand = '',
  cardCompany,
  cardNumbers,
  cardExpiryDate,
}: CardPreviewProps) {
  const brandImage = cardBrand === '' ? null : CARD_BRAND_IMAGE[cardBrand];

  return (
    <div
      css={(theme) => ({
        width: '212px',
        height: '132px',
        backgroundColor:
          cardCompany === ''
            ? theme.colors.cardBackground
            : theme.colors.cardCompanyBackground[cardCompany],
        boxShadow: '3px 3px 5px 0px #00000040;',
        borderRadius: '4px',
        padding: '8px 12px 8px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      })}
    >
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          css={(theme) => ({
            backgroundColor: theme.colors.chipBackground,
            width: '36px',
            height: '22px',
            border: `0.5px solid #DDCD781A`,
            borderRadius: '4px',
          })}
        ></div>
        {brandImage && <img src={brandImage.src} alt={brandImage.alt} width={36} height={22} />}
      </div>
      <div
        css={(theme) => ({
          ...theme.typography.info,
          color: theme.colors.white,
          display: 'flex',
          gap: '10px',
        })}
      >
        <span css={{ width: '40px', display: 'inline-block', textAlign: 'center' }}>
          {cardNumbers[0]}
        </span>
        <span css={{ width: '40px', display: 'inline-block', textAlign: 'center' }}>
          {cardNumbers[1]}
        </span>
        <span css={{ letterSpacing: '0px', fontSize: '30px', width: '34px' }}>
          {'·'.repeat(cardNumbers[2].length)}
        </span>
        <span css={{ letterSpacing: '0px', fontSize: '30px', width: '34px' }}>
          {'·'.repeat(cardNumbers[3].length)}
        </span>
      </div>
      {cardExpiryDate[0] !== '' && cardExpiryDate[1] !== '' && (
        <span
          css={(theme) => ({
            ...theme.typography.info,
            color: theme.colors.white,
          })}
        >
          {cardExpiryDate[0].padStart(2, '0')}/{cardExpiryDate[1]}
        </span>
      )}
    </div>
  );
}
