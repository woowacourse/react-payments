import './preview.css';

export default function Preview() {
  return (
    <div className='card-background'>
      <div className='card-preview-container'>
        <div className='card-preview payment-sim'></div>
        <div className='card-preview payment-method'>
          <img src='./Mastercard.svg' alt='Mastercard' className='card-preview' />
          {/* <img src='./Visa.svg' alt='Visa' className='payment-logo' /> */}
        </div>
      </div>
    </div>
  );
}
