import DefaultCardImage from '@/core/assets/defaultCardImage.png';
import MastercardSvg from '@/core/assets/Mastercard.svg?react';
import VisaSvg from '@/core/assets/Visa.svg?react';

type Bank = 'default';
type BrandType = 'visa' | 'mastercard';
type CardNumberType = string[] | undefined;
type ExpirationDate = string[] | undefined;

export interface DefaultCreditCardProps {
  bank: Bank;
  cardBrand: BrandType;
  cardNumberList?: CardNumberType;
  expirationDate?: ExpirationDate;
}

export const CreditCard = ({
  bank = 'default',
  cardBrand = 'mastercard',
  cardNumberList,
  expirationDate,
}: DefaultCreditCardProps) => {
  return (
    <div className="credit-card">
      {bank === 'default' ? <img className="credit-card-image" src={DefaultCardImage} alt="Default Card" /> : null}
      <div className="credit-card-brand">{cardBrand === 'mastercard' ? <MastercardSvg /> : <VisaSvg />}</div>
      <div>
        {cardNumberList?.map((number, index) => (
          <span key={index}>{number}</span>
        ))}
      </div>
      <div>
        {expirationDate?.map((number, index) => (
          <span key={index}>{number}</span>
        ))}
      </div>
    </div>
  );
};
