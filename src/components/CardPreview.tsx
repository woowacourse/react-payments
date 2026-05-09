import visa from '../assets/Visa.png';
import master from '../assets/Mastercard.png';
import union from '../assets/UnionPay.png';
import diners from '../assets/Diners.png';
import amex from '../assets/Amex.png';
import { maskCardNumbers } from '../utils/maskCardNumbers';
import type { CardBrandType, CardIssuerType } from '../types/cardStausTypes';

type CardPreviewProps = {
  cardBrand: CardBrandType;
  cardNumbers: string[];
  cardExpiryDate: string[];
  cardIssuer?: CardIssuerType | '';
};

export default function CardPreview({
  cardBrand,
  cardNumbers,
  cardExpiryDate,
  cardIssuer = '',
}: CardPreviewProps) {
  const cardImgSrc: string | null = (() => {
    switch (cardBrand) {
      case 'visa':
        return visa;
      case 'master':
        return master;
      case 'unionPay':
        return union;
      case 'diners':
        return diners;
      case 'amex':
        return amex;
      default:
        return null;
    }
  })();

  return (
    <div
      css={(theme) => ({
        width: '212px',
        height: '132px',
        backgroundColor: cardIssuer ? theme.colors[cardIssuer] : theme.colors.cardBackground,
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
        {cardImgSrc && <img src={cardImgSrc} alt="카드 브랜드" width={36} height={22} />}
      </div>
      <div
        css={(theme) => ({
          ...theme.typography.info,
          color: theme.colors.white,
          display: 'flex',
          gap: '10px',
        })}
      >
        {maskCardNumbers(cardNumbers).map((cardNumber, index) => {
          return (
            <span
              key={index}
              css={{
                width: '40px',
                display: 'inline-block',
                textAlign: 'center',
                fontSize: index > 1 ? '30px' : '14px',
                letterSpacing: index > 1 ? '0px' : '16%',
              }}
            >
              {cardNumber}
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
