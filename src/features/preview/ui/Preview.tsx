import './preview.css';

export default function Preview() {
  return (
    <div className='card-background'>
      <div className='payment-card-container'>
        <div className='payment-card payment-sim'></div>
        <div className='payment-card payment-method'>
          <img src='./Mastercard.svg' alt='Mastercard' className='payment-card' />
          {/* <img src='./Visa.svg' alt='Visa' className='payment-logo' /> */}
        </div>
      </div>
    </div>
  );
}
