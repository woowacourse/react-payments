import { CARD_BRAND_IMAGE } from '../constants/cardBrandImages';
import type { CardBrand, CardCompany } from '../types/cardStatusTypes';

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
        {cardNumbers.map((cardNumber, index) => {
          const visibleCardNumber = index < 2 ? cardNumber : '·'.repeat(cardNumber.length);

          return (
            <span
              key={index}
              css={{
                display: 'inline-block',
                fontSize: index < 2 ? '14px' : '30px',
                letterSpacing: '0px',
                minWidth: `${Math.max(34, cardNumber.length * 10)}px`,
                textAlign: 'center',
              }}
            >
              {visibleCardNumber}
            </span>
          );
        })}
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
