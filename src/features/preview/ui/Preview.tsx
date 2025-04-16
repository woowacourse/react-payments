import { CardInfoProps } from '../../../shared/type/types';
import './preview.css';

export default function Preview({ cardInfo }: { cardInfo: CardInfoProps }) {
  return (
    <div className='card-background'>
      <div className='card-preview-container'>
        <div className='card-preview payment-sim'></div>
        <div className='card-preview payment-method'>
          <img src='./Mastercard.svg' alt='Mastercard' className='card-preview' />
          {/* <img src='./Visa.svg' alt='Visa' className='payment-logo' /> */}
        </div>
      </div>
      <div className='card-preview-info-container'>
        <div className='card-preview-info-card-number-container'>
          <div className='card-preview-info-text'>{cardInfo?.cardNumber[0]}</div>
          <div className='card-preview-info-text'>{cardInfo?.cardNumber[1]}</div>
          <div className='card-preview-info-text secret'>{'•'.repeat(cardInfo.cardNumber[2]?.length)}</div>
          <div className='card-preview-info-text secret'>{'•'.repeat(cardInfo.cardNumber[3]?.length)}</div>
        </div>
        <div className='card-preview-info-text'>
          {cardInfo.cardExpirationDate.month}
          {cardInfo.cardExpirationDate.year && '/'}
          {cardInfo.cardExpirationDate.year}
        </div>
      </div>
    </div>
  );
}
